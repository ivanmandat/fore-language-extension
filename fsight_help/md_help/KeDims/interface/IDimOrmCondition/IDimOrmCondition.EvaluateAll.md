# IDimOrmCondition.EvaluateAll

IDimOrmCondition.EvaluateAll
-


# IDimOrmCondition.EvaluateAll


## Синтаксис


EvaluateAll(Dimension: [IDimInstance](../IDimInstance/IDimInstance.htm)):
 [IDimIterator](../IDimIterator/IDimIterator.htm);


## Параметры


Dimension. Данные справочника,
 которые необходимо проверить на соответствие условиям поиска.


## Описание


Метод EvaluateAll осуществляет
 проверку всех элементов справочника и возвращает итератор, содержащий
 элементы, удовлетворяющие условиям поиска.


## Пример


Для выполнения примера предполагается наличие в репозитории справочника
 с идентификатором «Dim_1».


			Sub UserProc;

Var

    MB: IMetabase;

    DimInst: IDimInstance;

    Elem: IDimElements;

    Man: IDimOrmManager;

    Cond: IDimOrmCondition;

    AttrsList: IDimAttributesList;

    Crit: IDimTextCriteria;

    Iter: IDimIterator;

Begin

    MB := MetabaseClass.Active;

    DimInst := MB.ItemById("Dim_1").Open(Null) As IDimInstance;

    Elem := DimInst.Elements;

    AttrsList := New DimAttributesList.Create(DimInst.Dimension, "NAME;ID");

    Crit := New DimTextCriteria.Create;

    //Определение атрибутов через метод Probe

    Crit.CriteriaOptions := TextCriteriaOptions.SearchProbeAttributes

        Or TextCriteriaOptions.FreeText;

    //Указание объекта, который будет определять атрибуты для поиска

    //Для атрибутов Name и Id метод вернет значение True т.к. они включены в коллекцию

    Crit.Probe := AttrsList.Probe;

    Crit.Text := "100";

    Man := New DimOrmManager.Create;

    Cond := Man.CreateCondition(DimInst.Dimension, Crit);

    Iter := Cond.EvaluateAll(DimInst);

    Iter.First;

    While Iter.Next Do

        Debug.WriteLine(Elem.Name(Iter.Element));

    End While;

End Sub UserProc;


После выполнения примера будет создан объект для поиска элементов справочника.
 Будет установлено условие, в соответствии с которым будет производиться
 поиск. После этого будет осуществлена проверка всех элементов на соответствии
 условиям поиска. Наименования элементов, которые удовлетворяют условиям
 поиска, будут выведены в консоль среды разработки.


См. также:


[IDimOrmCondition](IDimOrmCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
