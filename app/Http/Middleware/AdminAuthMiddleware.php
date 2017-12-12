<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class AdminAuthMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next,$guard = null)
    {
        //dd(auth('admin')->user());die;
        if (Auth::guard($guard)->guest()) {
            if ($request->ajax() || $request->wantsJson()) {
                return response('AdminAuthMiddleware-Unauthorized.', 401);
            } else {
                return redirect()->guest('admin/login/AdminAuthMiddleware');
            }
        }
        return $next($request);
    }
}
