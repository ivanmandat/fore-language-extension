# IWebFormComponent.ShowObject

IWebFormComponent.ShowObject
-


# IWebFormComponent.ShowObject


## Синтаксис


ShowObject(Object: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm));


## Параметры


Object. Описание веб-формы,
 которую  необходимо открыть.


## Описание


Метод ShowObject осуществляет
 открытие указанной веб-формы в новой вкладке браузера.


## Комментарии


Метод может быть выполнен только из кода веб-формы. В качестве значения
 параметра Object допустимо указывать
 описание только веб-форм. При выполнении метода веб-форма будет открыта
 в новой вкладке браузера, она не будет связана с текущей веб-формой, из
 которой осуществляется вызов метода.


## Пример


Для выполнения примера в репозитории предполагается наличие двух веб-форм.
 Одна из веб-форм имеет идентификатор F_REPORT. На второй веб-форме должна
 располагаться кнопка.


Добавьте ссылки на системные сборки: Metabase, WebForms.


	Sub Button1OnClick;

	Var

	    Mb: IMetabase;

	    MDesc: IMetabaseObjectDescriptor;

	Begin

	    Mb := MetabaseClass.Active;

	    MDesc := Mb.ItemById("F_REPORT");

	    // Открытие веб-формы в новой вкладке

	    Self.ShowObject(MDesc);

	End Sub Button1OnClick;


При нажатии на кнопку указанная веб-форма будет открыта в новой вкладке
 браузера.


См. также:


[IWebFormComponent](IWebFormComponent.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
