/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['knockout'],function(ko){
    function footerModel(args)
    {
        var self=this;
        //supply bind req by views 
        self.compName=ko.observable(args.company);
    }
    return footerModel;
})