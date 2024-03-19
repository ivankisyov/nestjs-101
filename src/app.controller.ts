import { Controller, Get } from "@nestjs/common";

@Controller("api/v1")
export class AppController {
  @Get("/greet")
  getRootRoute() {
    return "Hello World!";
  }
}
