# ICalculatedCube.ExternalFactDimension

ICalculatedCube.ExternalFactDimension
-


# ICalculatedCube.ExternalFactDimension


## Синтаксис


ExternalFactDimension: Boolean;


## Описание


Свойство ExternalFactDimension
 определяет, будет ли для вычисляемого куба использоваться локальное измерение
 фактов.


## Комментарии


Если свойству ExternalFactDimension
 установлено значение True (значение
 по умолчанию), то локальное измерения фактов в кубе не используется. При
 этом будут использоваться измерения фактов кубов-источников.


Если свойству ExternalFactDimension
 установлено значение False, то
 в кубе будет использоваться локальное измерение фактов. Локальное измерение
 фактов строится на базе конструируемого справочника, который создается
 автоматически в виде скрытого дочернего объекта куба. Для настройки конструируемого
 справочника и формирования дерева элементов используйте свойство [InternalFactDimension](ICalculatedCube.InternalFactDimension.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории вычисляемого
 куба с идентификатором «Calc_Cube».


			Sub UserProc;

Var

    MB: IMetabase;

    Cube: ICalculatedCube;

    Facts: ICustomDimTree;

    v: Variant;

Begin

    MB := MetabaseClass.Active;

    Cube := MB.ItemById("Calc_Cube").Edit As ICalculatedCube;

    Cube.ExternalFactDimension := False;

    Facts := Cube.InternalFactDimension.Tree;

    v := Facts.Add(Null);

    Facts.Name(v) := "Параметр 1";

    v := Facts.Add(Null);

    Facts.Name(v) := "Параметр 2";

    (Cube As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в вычисляемом кубе будет использоваться локальное
 измерение фактов, в измерении будут созданы два элемента.


См. также:


[ICalculatedCube](ICalculatedCube.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
