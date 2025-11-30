# IUnitsDimInstance.BasisByElementKey

IUnitsDimInstance.BasisByElementKey
-


# IUnitsDimInstance.BasisByElementKey


## Синтаксис


BasisByElementKey(ElementKey: Variant): Integer;


## Параметры


ElementKey. Ключ элемента справочника.


## Описание


Свойство BasisByElementKey возвращает
 индекс базовой единицы измерения по ключу элемента.


## Комментарии


Базовая единица измерения - это единица измерения с масштабом «1» той
 же меры, что и единица измерения элемента.


## Пример


Для выполнения примера в репозитории должна присутствовать база данных
 временных рядов с идентификатором «FC». База содержит показатель с ключом
 «336699». Также необходимо добавить ссылки на системные сборки «Metabase»,
 «Cubes», «Dimensions».


			Sub UserProc;

Var

    Mb: IMetabase;

    Cat: IMetabaseObject;

    Inst: IRubricatorInstance;

    UnitsDim: IDimInstance;

    FactD: IRubricatorFactData;

    Units: IUnitsDimInstance;

    Elements: IDimElements;

    Key, Base: Integer;

    El: Integer;

Begin

    Mb := MetabaseClass.Active;

    Cat := Mb.ItemById("FC").Bind;

    Inst := Cat.Open(Null) As IRubricatorInstance;

    UnitsDim := Inst.UnitsDimension;

    Units := UnitsDim As IUnitsDimInstance;

    FactD := Inst.GetFactData(336699);

    Key := FactD.Units;

    Elements := UnitsDim.Elements;

    Base := Units.BasisByElementKey(Key);

    Debug.WriteLine("Базовая единица измерения: " + Elements.Name(Base));

    El := Units.ElementByKey(Key);

    Debug.WriteLine("Единица измерения: " + Elements.Name(El));

End Sub UserProc;


После выполнения примера в окно консоли будет выведено наименование
 единицы измерения и базовой единицы измерения для показателя с ключом
 «336699».


См. также:


[IUnitsDimInstance](IUnitsDimInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
