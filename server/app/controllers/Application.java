package controllers;

import play.*;
import play.mvc.*;
import static play.libs.Json.toJson;

import views.html.*;

public class Application extends Controller {

    public Result index() {
        return ok(index.render("Your new application is ready."));
    }

    public Result apiOne() {
        response().setHeader("Access-Control-Allow-Origin", "*");
        return ok(toJson("{name: TEST 1}")).as("application/json");
    }

    public Result apiTwo() {
        return ok("TEST 2");
    }

}
