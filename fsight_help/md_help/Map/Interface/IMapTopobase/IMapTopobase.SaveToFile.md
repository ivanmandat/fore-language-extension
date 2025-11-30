# IMapTopobase.SaveToFile

IMapTopobase.SaveToFile
-


# IMapTopobase.SaveToFile


## Синтаксис


SaveToFile(FileName: String);


## Параметры


FileName. Наименование файла,
 в который будет сохранена топооснова.


## Описание


Метод SaveToFile сохраняет топооснову
 в файл.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, UiMap с наименованиями Button1, MapBox1 и UiMap1 соответственно.
 UiMap1 является источником данных для MapBox1. Также в файловой системе
 должен присутствовать файл «C:\MAP_RF.tbs», содержащий топооснову.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки:
 ExtCtrls, Forms, Map, Metabase, Ui.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MetaBase: IMetabase;

	    TopoBase: IMapTopobase;

	    Map: IMap;

	Begin

	    MetaBase := MetabaseClass.Active;

	    TopoBase := MetaBase.ItemById("MAP_RF").Bind As IMapTopobase;

	    Map := UiMap1.Map;

	    Map.Topobase := TopoBase;

	    TopoBase.SaveToFile("C:\MAP_RF.tbs");

	    WinApplication.InformationBox("Топооснова '" + TopoBase.Name + "' сохранена в файл");

	End Sub Button1OnClick;


После выполнения примера в компонент MapBox будет загружена карта «MAP_RF».
 Затем топооснова будет сохранена в файл «C:\MAP_RF.tbs», о чём будет отображено
 информационное сообщение.


См. также:


[IMapTopobase](IMapTopobase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
