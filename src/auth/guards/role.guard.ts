import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../dto/role.enum';
import { ROLES_KEY } from '../dto/roles.decorator';
import { jwtDecode } from 'jwt-decode';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (requiredRoles) {
      const { headers } = context.switchToHttp().getRequest();
      const token = headers.authorization.split(' ')[1];
      const decoded = jwtDecode(token) as any;
      return requiredRoles[0] === decoded.role;
    }
    return false;
  }
}
