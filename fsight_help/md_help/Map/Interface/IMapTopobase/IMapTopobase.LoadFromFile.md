# IMapTopobase.LoadFromFile

IMapTopobase.LoadFromFile
-


# IMapTopobase.LoadFromFile


## Синтаксис


LoadFromFile(FileName: String);


## Параметры


FileName. Наименование файла,
 из которого будет загружена топооснова.


## Описание


Метод LoadFromFile загружает
 топооснову из файла.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, UiMap с наименованиями Button1, MapBox1 и UiMap1 соответственно.
 UiMap1 является источником данных для MapBox1. Также в файловой системе
 должен присутствовать файл «C:\MAP_RF.tbs», содержащий топооснову.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки:
 ExtCtrls, Forms, Map.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    TopoBase: IMapTopobase;

	    Map: IMap;

	Begin

	    TopoBase := New DxMapTopobase.Create As IMapTopobase;

	    TopoBase.LoadFromFile("C:\MAP_RF.tbs");

	    Map := UiMap1.Map;

	    Map.Topobase := TopoBase;

	End Sub Button1OnClick;


После выполнения примера в компонент MapBox будет загружена топооснова
 из файла «C:\MAP_RF.tbs».


См. также:


[IMapTopobase](IMapTopobase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
