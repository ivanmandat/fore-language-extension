# IMetabaseCustomClass.IsContainer

IMetabaseCustomClass.IsContainer
-


# IMetabaseCustomClass.IsContainer


## Синтаксис


		IsContainer:
		 Boolean;


## Описание


Свойство IsContainer определяет
 разрешение на добавление [дочерних
 объектов](UiDevEnv.chm::/04_NavigatorSetting/Classes_Object/ObjectsClasses.htm#create) для пользовательского класса.


## Комментарии


Допустимые значения:


	- True. Пользовательский
	 класс является [объектом-контейнером](UiDevEnv.chm::/04_NavigatorSetting/Classes_Object/ObjectsClasses.htm#create),
	 внутри которого можно создавать любые объекты репозитория. Также внутри
	 такого объекта действует собственное пространство идентификаторов;


	- False. Пользовательский
	 класс не является объектом-контейнером.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    ClassNew: IMetabaseCustomClass;

		    CustomClass: IMetabaseCustomExtender;

		    Type: MetabaseSpecialObject;

		Begin

		    Mb := Metabaseclass.Active;

		    Type := MetabaseSpecialObject.CustomExtender;

		    CustomClass := Mb.SpecialObject(Type).Edit As IMetabaseCustomExtender;

		    ClassNew := CustomClass.Classes.Add;

		    ClassNew.Name := "Container";

		    ClassNew.Description := "Класс-контейнер";

		    ClassNew.Data := "Пользовательский текст произвольного формата";

		    ClassNew.IsContainer := True;

		    (CustomClass As IMetabaseObject).Save;

		End Sub UserProc;


После выполнения примера будет создан [пользовательский
 класс](UiDevEnv.chm::/04_NavigatorSetting/Classes_Object/ObjectsClasses.htm) «Container» с разрешением на добавление дочерних
 объектов.


См. также:


[IMetabaseCustomClass](IMetabaseCustomClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
