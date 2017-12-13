/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 * Copyright 2017, Debtech S.R.L.
 *
 * http://www.debtech.com.ar
 * http://www.debmedia.com
 */
package controllers.web;
import play.mvc.Controller;
import play.mvc.Result;

/**
 * Class description
 *
 * @author Facundo Caldora <fncaldora@debmedia.com>
 * @since v1.0.0
 */
public class Recruit extends Controller {
    
    public static Result recruit(){
        
        return ok(views.html.thanks.render());
        
    }

}
