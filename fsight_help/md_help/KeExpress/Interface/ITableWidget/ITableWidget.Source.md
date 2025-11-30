# ITableWidget.Source

ITableWidget.Source
-


# ITableWidget.Source


## Синтаксис


Source: [ITableSource](../ITableSource/ITableSource.htm);


## Описание


Свойство Source определяет источник
 данных для компонента [TableWidget](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/TableWidget.htm).


## Комментарии


В качестве источника данных для компонента [TableWidget](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/TableWidget.htm)
 используйте компоненты доступа к данным [UiErAnalyzer](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiErAnalyzer.htm)
 и [UiReport](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiReport.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты:


	- UiErAnalyzer с наименованием
	 «UiErAnalyzer1»;


	- NavigationBar с
	 наименованием «NavigationBar1»;


	- TableWidget с наименованием
	 «TableWidget1».


В качестве источника данных для компонента «UiErAnalyzer1» укажите экспресс-отчет.


Пример является обработчиком события OnCreate для формы и OnRefresh
 для компонента «TableWidget1».


	Sub ITABLEWIDGET_SOURCEFormOnCreate(Sender: Object; Args: IEventArgs);

	Begin

	    TableWidget1.OnRefresh(Sender, Args);

	End Sub ITABLEWIDGET_SOURCEFormOnCreate;

	…

	Sub TableWidget1OnRefresh(Sender: Object; Args: IEventArgs);

	Begin

	    //Панель навигации, которая будет отображать вкладки:

	    TableWidget1.NavBar := NavigationBar1;

	    //Источник, для которого будут применяться настройки:

	    TableWidget1.Source := UiErAnalyzer1 As ITableSource;

	    //Активация компонента:

	    TableWidget1.Active := True;

	End Sub TableWidget1OnRefresh;


В результате выполнения примера при создании формы будут обновлены и
 установлены параметры компонента «TableWidget1»:


	- будет задана панель навигации;


	- будет задан источник данных компонента «TableWidget1»;


	- компонент «TableWidget1» будет активирован.


См. также:


[ITableWidget](ITableWidget.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
