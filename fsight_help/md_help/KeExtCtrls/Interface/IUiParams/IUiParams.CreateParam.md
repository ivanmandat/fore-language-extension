# IUiParams.CreateParam

IUiParams.CreateParam
-


# IUiParams.CreateParam


## Синтаксис


CreateParam(FieldType: [DbDataType](Dal.chm::/Enums/DbDataType.htm);
 ParamName: String): [IUiParam](../IUiParam/IUiParam.htm);


## Параметры


FieldType. Параметр, определяющий
 тип создаваемого параметра;


ParamName. Наименование создаваемого
 параметра. Данное наименование должно совпадать с наименованием параметра,
 используемого в [SQL-запросе](../IUiQuery/IUiQuery.SQL.htm).


## Описание


Метод CreateParam осуществляет
 создание параметра, типа и наименование которого передаются посредством
 входных параметров FieldType,
 ParamName.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки «Button1», компонента UiQuery с наименованием «UiQuery1». В
 репозитории содержится база данных BD, в данной базе хранятся данные таблицы
 TABLE. В таблице имеется поле «Id», содержащее целочисленные значения.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    Params: IUiParams;

	    Param: IUiParam;

	Begin

	    MB := MetabaseClass.Active;

	    Params := UiQuery1.Params;

	    UiQuery1.Database := MB.ItemById("BD").Bind As IDatabase;

	    UiQuery1.SQL.AsString := "Select * From Tablica_1 Where (ID>=:Item) And (ID<=:Item1)";

	    Param := Params.CreateParam(DbDataType.Integer,"Item");

	    Param.Value := 10;

	    Param := Params.CreateParam(DbDataType.Integer,"Item1");

	    Param.Value := 20;

	    UiQuery1.Active := True;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будут установлены параметры
 компонента «UiQuery1». При открытии источника данных, в результате выполнения
 запроса, будут получены записи значения поля «Id» в которых, находится
 в диапазоне [10;20].


См. также:


[IUiParams](IUiParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
