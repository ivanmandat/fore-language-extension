# ILaner.SaveChangesToModels

ILaner.SaveChangesToModels
-


# ILaner.SaveChangesToModels


## Синтаксис


SaveChangesToModels;


## Описание


Метод SaveChangesToModels
 сохраняет изменения в данных показателей, полученных из модели контейнера
 моделирования, в исходную модель.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 TabSheetBox, UiErAnalyzer с наименованиями Button1, Button2, TabSheetBox1
 и UiErAnalyzer1 соответственно. UiErAnalyzer1 является источником данных
 для TabSheetBox1. В UiErAnalyzer1 должна быть загружена рабочая область
 базы данных временных рядов. В контейнере моделирования данной базы должна
 присутствовать модель с идентификатором OBJ_MODEL, основанная на показателях
 базы.


Добавьте ссылки на системные сборки: Cubes, Express, ExtCtrls, Forms,
 Laner, Metabase, Ms, Tab.


Пример будет выполняться в два этапа:


	- При нажатии на кнопку Button1 таблица данных будет переведена
	 в режим редактирования, также в нее будут загружены данные показателей
	 из модели.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ErAn: IEaxAnalyzer;

	    Laner: ILaner;

	    Ruby: IRubricator;

	    ActiveMetabase: IMetabase;

	    Cont: IMetabaseObjectDescriptor;

	    Model: IMsModel;

	Begin

	    ActiveMetabase := MetabaseClass.Active;

	    ErAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAn.Laner;

	    Ruby := Laner.RubricatorInstance.Rubricator;

	    Cont := Ruby.ModelSpace;

	    Model := ActiveMetabase.FetchItemById("OBJ_MODEL", Cont.Key).Edit As IMsModel;

	    Model.RestoreLaner(Laner, Null);

	    TabSheetBox1.Source.GetTabSheet.Table.Style.Locked := TriState.OffOption;

	End Sub Button1OnClick;


После выполнения данного примера данные можно
 будет изменить.


	- При нажатии на кнопку Button2 в модель будут сохранены измененные
	 данные показателя.


	Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ErAn: IEaxAnalyzer;

	    Laner: ILaner;

	Begin

	    ErAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAn.Laner;

	    Laner.SaveChangesToModels;

	End Sub Button2OnClick;


После выполнения примера измененные данные показателя будут сохранены
 в модель контейнера моделирования.


См. также:


[ILaner](ILaner.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
