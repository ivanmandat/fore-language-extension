# IDimAttributeInstance.DisplayDifferentValue

IDimAttributeInstance.DisplayDifferentValue
-


# IDimAttributeInstance.DisplayDifferentValue


## Синтаксис


DisplayDifferentValue: Boolean;


## Описание


Свойство DisplayDifferentValue
 возвращает признак отображения по данному атрибуту значения, не соответствующего
 реальному значению.


## Комментарии


При наличии связей в справочниках НСИ используемые для них отображаемые
 значения атрибутов могут иметь тип данных, не совпадающий с типом данных
 самого атрибута. Тип отображаемых данных зависит от установленного [формата
 отображения](KeRds.chm::/Interface/IRdsLink/IRdsLink.DisplayFormat.htm).


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 «NSI_1». В данном репозитории содержится справочник НСИ с идентификаторами
 «Dict_1». В справочнике создан атрибут с идентификатором «LINKATTR». Данный
 атрибут используется для связи с другими справочниками НСИ.


			Sub UserProc;

Var

    MB: IMetabase;

    DimInst: IDimInstance;

    AttrInst: IDimAttributeInstance;

    HInst: IDimHierarchyInstance;

Begin

    MB := MetabaseClass.Active;

    DimInst := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Open(Null) As IDimInstance;

    AttrInst := DimInst.Attributes.FindById("LINKATTR");

    If AttrInst.DisplayDifferentValue Then

        Debug.WriteLine(AttrInst.DisplayDataType);

        Debug.WriteLine(AttrInst.DisplayValue(0));

    End If;

End Sub UserProc;


После выполнения примера будет осуществлена проверка отображаемого значения
 атрибута «LINKATTR». Если отображаемое значение не соответствует реальному
 значению по атрибуту, то тип отображаемого значения и само отображаемое
 значение для указанного элемента будет выведено в консоль среды разработки.


См. также:


[IDimAttributeInstance](IDimAttributeInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
