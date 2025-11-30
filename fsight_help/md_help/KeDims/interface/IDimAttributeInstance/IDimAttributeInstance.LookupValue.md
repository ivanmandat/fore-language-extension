# IDimAttributeInstance.LookupValue

IDimAttributeInstance.LookupValue
-


# IDimAttributeInstance.LookupValue


## Синтаксис


LookupValue(Value: Variant): Integer;


## Параметры


Value - значение
 атрибута, которое необходимо найти.


## Описание


Метод LookupValue осуществляет
 поиск значения атрибута и возвращает индекс элемента в случае удачного
 поиска.


## Комментарии


Данный метод возвращает индекс первого найденного элемента, имеющего
 указанное значение атрибута. Если указанное значение атрибута не найдено,
 то метод возвращает «-1». Значение, указываемое в параметре Value,
 чувствительно к регистру символов. Поиск осуществляется только по полному
 значению.


В справочниках НСИ для атрибутов, используемых для связи, тип значения
 атрибута может не совпадать с типом отображаемого значения атрибута. Для
 поиска по отображаемому значению атрибута используйте метод [LookupDisplayValue](IDimAttributeInstance.LookupDisplayValue.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории справочника
 с идентификатором «D_TO».


			Sub UserProc;

Var

    MB: IMetabase;

    Dimen: IDimInstance;

    Attrs: IDimAttributesInstance;

    Attr: IDimAttributeInstance;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    Dimen := MB.ItemById("D_TO").Open(Null) As IDimInstance;

    Attrs := Dimen.Attributes;

    Attr := Attrs.FindById("NAME");

    If Attr <> Null Then

        i := Attr.LookupValue("Российская Федерация");

    End If;

End Sub UserProc;


После выполнения примера будет осуществлен поиск по указанному атрибуту
 справочника. В случае удачного поиска в переменной «i» будет содержаться
 индекс найденного элемента.


См. также:


[IDimAttributeInstance](IDimAttributeInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
