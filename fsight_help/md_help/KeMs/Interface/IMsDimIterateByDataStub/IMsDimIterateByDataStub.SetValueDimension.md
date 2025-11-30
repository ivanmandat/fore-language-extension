# IMsDimIterateByDataStub.SetValueDimension

IMsDimIterateByDataStub.SetValueDimension
-


# IMsDimIterateByDataStub.SetValueDimension


## Синтаксис


SetValueDimension(Instance: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm)):
 [IMsDimIteratorFilteredDimension](../IMsDimIteratorFilteredDimension/IMsDimIteratorFilteredDimension.htm);


## Параметры


Instance. Измерение источника
 данных приёмника.


## Описание


Метод SetValueDimension задаёт
 измерение источника данных приёмника, для которого необходимо привязать
 значение фильтрующего источника данных.


## Комментарии


Используется в [алгоритмах
 расчёта](CalculationAlgorithm.chm::/Purpose.htm)
 при настройке дополнительной фильтрации по данным [блока
 расчёта](CalculationAlgorithm.chm::/Desktop/Calculation_block/Calculation_unit.htm). Для дополнительной фильтрации элементов измерения
 приёмника по значениям указанного атрибута выполняется привязка значения
 фильтрующего источника данных. При использовании дополнительной фильтрации
 отметка элементов измерения приёмника зависит от значений отмеченных элементов
 измерений выбранного источника данных и учитывается при расчёте алгоритма.


Для получения подробной информации обратитесь к разделу «[Настройка
 фильтрации по данным](CalculationAlgorithm.chm::/Desktop/Calculation_block/FilteringByData.htm)».


Для указания атрибута измерения источника данных приёмника используйте
 свойство [IMsDimIterateByDataStub.ValueDimAttr](IMsDimIterateByDataStub.ValueDimAttr.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие алгоритма
 расчёта. В алгоритме расчёта содержится блок расчёта, в котором выбран
 приёмник данных и фильтрующий источник данных для дополнительной фильтрации
 элементов измерения приёмника по значениям указанного атрибута. Убедитесь,
 что в составе приёмника содержится справочник НСИ с идентификатором DIMENSION
 и в алгоритме расчёта содержится метамодель блока расчёта с ключом «12345».


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms.


			Sub UserProc;

Var

    MB: IMetabase;

    Meta: IMsMetaModel;

    CalculationChain: IMsCalculationChainEntries;

    Iter: IMsCalculationChainMultiDimIterator;

    Dim: IDimInstance;

    Param: IMsDimIterateByDataOptions;

    Stub: IMsDimIterateByDataStub;

Begin

    MB := MetabaseClass.Active;

    // Получим измерение приёмника (справочник НСИ)

    Dim := MB.ItemById("DIMENSION").Open(Null) As IDimInstance;

    // Получим метамодель из алгоритма расчёта

    Meta := MB.Item(12345).Edit As IMsMetaModel;

    // Получим цепочку расчёта метамодели и первую итерацию

    CalculationChain := Meta.CalculationChain;

    Iter := CalculationChain.Item(0) As IMsCalculationChainMultiDimIterator;

    // Получим параметры итерации

    Param := Iter.IterateByData;

    // Зададим привязку значения по атрибуту

    Stub := Param.Stubs.Item(0);

    Stub.SetValueDimension(Dim);

    Stub.ValueDimAttr := "KEY";

    // Сохраним изменения

    Meta.MetabaseObject.Save;

    // Выведем в консоль наименование измерения

    Debug.WriteLine(Stub.ValueDimension.Name);

End Sub UserProc;


В результате выполнения примера будет выполнена привязка значения атрибута
 KEY, который содержится в измерении приёмника с идентификатором DIMENSION,
 к фильтрующему источнику данных. В консоль будет выведено наименование
 привязанного измерения приёмника.


См. также:


[IMsDimIterateByDataStub](IMsDimIterateByDataStub.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
