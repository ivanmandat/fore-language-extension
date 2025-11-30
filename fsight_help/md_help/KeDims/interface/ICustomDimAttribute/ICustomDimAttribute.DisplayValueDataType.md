# ICustomDimAttribute.DisplayValueDataType

ICustomDimAttribute.DisplayValueDataType
-


# ICustomDimAttribute.DisplayValueDataType


## Синтаксис


DisplayValueDataType: [DbDataType](Dal.chm::/Enums/DbDataType.htm);


## Описание


Свойство DisplayValueDataType
 определяет тип отображаемого значения атрибута.


## Комментарии


При использовании в справочниках
 связей, отображаемые значения атрибутов, используемых для связи, могут
 иметь тип данных, не совпадающий с типом данных самого атрибута. Тип отображаемых
 данных зависит от установленного [формата
 отображения](KeRds.chm::/Interface/IRdsLink/IRdsLink.DisplayFormat.htm). Определить тип отображаемого значения
 можно используя данное свойство.


## Примеры


Для выполнения примера в репозитории предполагается наличие куба с идентификатором
 CUBE.


Добавьте ссылки на системные сборки: Cubes, Dal, Dimensions, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    cube: IStandardCube;

    customdim: ICustomDimension;

    attrs: ICustomDimAttributes;

    attr: ICustomDimAttribute;

Begin

    // Получим репозиторий

    mb := MetabaseClass.Active;

    // Получим куб

    cube := mb.ItemById("CUBE").Edit As IStandardCube;

    // Получим измерение фактов

    customdim := cube.FactDimension.Dimension As ICustomDimension;

    // Получим коллекцию атрибутов измерения

    attrs := customdim.Attributes;

    // Получим атрибут измерения фактов

    attr := attrs.Order;

    // Зададим, что значения
 атрибута измерения фактов отображаемые

    attr.HasDisplayValues:=True;

    // Определим тип отображаемого значения атрибута

    Select Case attr.DisplayValueDataType

        Case DbDataType.NoData: Debug.WriteLine("Нет данных");

        Case DbDataType.String: Debug.WriteLine("Тип данных: строковый");

        Case DbDataType.Integer: Debug.WriteLine("Тип данных: целочисленный");

        Case DbDataType.Float: Debug.WriteLine("Тип данных: вещественный");

        Case DbDataType.DateTime: Debug.WriteLine("Тип данных: дата и время");

        Case DbDataType.Blob: Debug.WriteLine("Тип данных: массив двоичных, либо символьных данных");

        Case DbDataType.Boolean: Debug.WriteLine("Тип данных: логический");

        Case DbDataType.Date: Debug.WriteLine("Тип данных: дата без времени");

        Case DbDataType.Decimal: Debug.WriteLine("Тип данных: десятичные значения высокой точности");

    End Select;

    // Сохраним изменения

    (customDim As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведен тип отображаемого
 значения атрибута измерения фактов.


См. также:


[ICustomDimAttribute](ICustomDimAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
