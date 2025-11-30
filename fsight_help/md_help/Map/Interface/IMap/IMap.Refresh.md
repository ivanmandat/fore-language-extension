# IMap.Refresh

IMap.Refresh
-


# IMap.Refresh


## Синтаксис


Refresh;


## Описание


Метод Refresh осуществляет сброс
 кеша данных и обновление карты.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, UiMap с наименованиями Button1, MapBox1 и UiMap1 соответственно.
 UiMap1 является источником данных для MapBox1. К компоненту UiMap1 должна
 быть подключена карта.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: ExtCtrls, Forms, Map.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Map: IMap;

	Begin

	    Map := UiMap1.Map;

	    Map.Refresh;

	End Sub Button1OnClick;


После выполнения примера карта будет обновлена.


См. также:


[IMap](IMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
