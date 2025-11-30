# PP.isBaseMemberOf

PP.isBaseMemberOf
-


**


# PP.isBaseMemberOf


## Синтаксис


isBaseMemberOf(cls: Function, memberName: String,
 checkOverride: Boolean);


## Параметры


*cls.* Экземпляр класса;


*memberName.* Наименование члена класса;


checkOverride. Признак проверки
 того, переопределён ли указанный член в родительском классе. Допустимые
 значения:


	- true. Осуществляется
	 проверка того, переопределён ли указанный член в родительском классе;


	- false. По умолчанию.
	 Проверка того, переопределён ли указанный член в родительском классе,
	 не осуществляется.


## Описание


Метод isBaseMemberOf**
 возвращает признак того, определён ли указанный член в одном из родителей
 заданного класса.


## Комментарии


Допустимые значения:


	- true. Указанный член
	 определён в одном из родителей заданного класса;


	- false. Указанный член
	 не определён ни в одном из родителей заданного класса.


## Пример


Для выполнения примера необходимо наличие в теге <head> html-страницы
 ссылки на файл сценария PP.js. Проверим, определены ли методы setImageList,
 setWidth, hide
 и clone родителям класса [PP.Ui.Button](dhtmlUi.chm::/Classes/button/button.htm):


var checkMemberOf = function(className, memberName) {
    var isBaseMemberOf = PP.isBaseMemberOf(PP.getTypeByName(className), memberName, true);
    console.log("Член %s%s принадлежит родителю класса %s", memberName, (isBaseMemberOf ? "" : " не"), className);
};
checkMemberOf("PP.Ui.Button", "setImageList");
checkMemberOf("PP.Ui.Button", "setWidth");
checkMemberOf("PP.Ui.Button", "hide");
checkMemberOf("PP.Ui.Button", "clone");
В результате выполнения примера в консоли браузера была выведена информация
 о том, определены ли методы setImageList,
 setWidth, hide
 и clone родителям класса [PP.Ui.Button](dhtmlUi.chm::/Classes/button/button.htm):


Член setImageList не принадлежит родителю класса
 PP.Ui.Button


Член setWidth не принадлежит родителю класса PP.Ui.Button


Член hide принадлежит родителю класса PP.Ui.Button


Член clone принадлежит родителю класса PP.Ui.Button


Для проверки, без учета переопределенных членов, следует задать параметру
 «checkOverride» значение false:


var checkOverrideMemberOf = function(className, memberName) {
    var isBaseMemberOf = PP.isBaseMemberOf(PP.getTypeByName(className), memberName, false);
    console.log("Член %s%s принадлежит родителю класса %s", memberName, (isBaseMemberOf ? "" : " не"), className);
};
checkOverrideMemberOf("PP.Ui.Button", "setImageList");
checkOverrideMemberOf("PP.Ui.Button", "setWidth");
checkOverrideMemberOf("PP.Ui.Button", "hide");
checkOverrideMemberOf("PP.Ui.Button", "clone");
В результате выполнения примера в консоли была выведена информация,
 отличающаяся от предыдущего запроса: метод «setWidth»
 переопределен в классе [PP.Ui.Button](dhtmlUi.chm::/Classes/button/button.htm)
 и поэтому был обозначен как не принадлежащий родителю в первом запросе:


Член setImageList не принадлежит родителю класса
 PP.Ui.Button


Член setWidth принадлежит родителю класса PP.Ui.Button


Член hide принадлежит родителю класса PP.Ui.Button


Член clone принадлежит родителю класса PP.Ui.Button


См. также:


[PP](../PP.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
