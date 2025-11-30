# Как правильно использовать метод dispose

Как правильно использовать метод dispose
-


# Как правильно использовать метод dispose


## Проблема


Реализация метода dispose может
 приводить к некоторым неочевидным ошибкам при его использовании.


Например, при разработке собственного компонента, который имеет три
 свойства, задаваемые извне:


PP.Ui.MyButton =
 function (settings)


{


    this._ImageList = null;


    this._Metabase = null;


    this._Source = null;


    PP.Ui.Control.call(this, settings);


};


PP.initClass(PP.Ui.MyButton, PP.Ui.Control,
 "Button");


Далее пример использования созданного компонента:


var
 imgList = new PP.ImageList({ Source:
 "Icon.png" });


var
 source = new PP.Exp.EaxAnalyzer();


var
 mb = new PP.Mb.Metabase();


var
 btn = new PP.Ui.MyButton({


    ImageList:
 imgList,


    Source:
 source,


    Metabase:
 mb


});


btn.dispose();


После выполнения примера и вызова метода dispose
 у кнопки, объектам source, imgList и mb также будет вызван метод dispose. Но так как эти свойства
 задаются извне и создаются вне кнопки, то это является ошибкой. Поэтому
 для свойств, значения которых являются ссылками на объекты типа PP.Object
 и задаются извне, нельзя вызывать dispose
 внутри класса-пользователя этих объектов.


## Решение


В классе MyButton необходимо переопределить базовый метод dispose
 следующим образом:


PP.Ui.MyButton.prototype.dispose
 = function ()


{


    delete this._ImageList;


    delete this._Metabase;


    delete this._Source;


    PP.Ui.Control.dispose.apply(this,
 arguments);


};


Примечание.
 В переопределённом методе обязательно необходимо вызвать dispose
 базового класса.


Теперь внешним объектам метод dispose
 вызван не будет.


См. также:


[База
 знаний разработчиков веб-приложений](Web_Developers_KnowledgeBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
