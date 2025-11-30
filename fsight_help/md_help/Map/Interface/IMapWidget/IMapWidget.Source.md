# IMapWidget.Source

IMapWidget.Source
-


# IMapWidget.Source


## Синтаксис


Source: [IMapSource](../IMapSource/IMapSource.htm);


## Описание


Свойство Source определяет источник
 данных для компонента.


## Пример


Для выполнения примера предполагается наличие на форме компонентов NavigationBar,
 MapWidget, MapBox, UiMap с наименованиями NavigationBar1, MapWidget1,
 MapBox1 и UiMap1 соответственно. К компоненту UiMap1 должна быть подключена
 карта.


Добавьте ссылки на системные сборки:
 ExtCtrls, Forms, Map.


	Sub UserProc;

	Begin

	    // Укажем источник данных для компонента MapBox

	    MapBox1.Source := UiMap1 As IMapSource;

	    // Активируем компонент MapWidget

	    MapWidget1.Active := True;

	    // Подключим компонент NavigationBar к MapWidget

	    MapWidget1.NavBar := NavigationBar1;

	    // Укажем источник данных для компонента MapWidget

	    MapWidget1.Source := UiMap1 As IMapSource;

	End Sub UserProc;


После выполнения примера появится возможность работать с картой с помощью
 компонента NavigationBar.


См. также:


[IMapWidget](IMapWidget.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
