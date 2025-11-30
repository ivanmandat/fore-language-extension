# ISolrImportCustomValues.FillValues

ISolrImportCustomValues.FillValues
-


# ISolrImportCustomValues.FillValues


## Синтаксис


FillValues(MbObject: [IMetabaseObject](KeSom.chm::/Interface/IMetabaseObject/IMetabaseObject.htm);
 Values: [ISolrFieldValues](../ISolrFieldValues/ISolrFieldValues.htm));


## Параметры


MbObject. Источник данных,
 индексируемый в текущий момент.


Values. Коллекция значений
 пользовательских полей, которая будет передана для индексации.


## Описание


Метод FillValues осуществляет
 формирование документов для индексации пользовательских полей в соответствии
 с указанными параметрами.


## Комментарии


Метод FillValues должен быть
 переопределен в пользовательском классе. В методе указывается код, который
 будет заполнять значения пользовательских полей в коллекции Values.
 Метод будет выполняться для каждого индексируемого объекта, сам объект
 будет доступен в параметре MbObject.


## Пример


			Class CSolrImportCustomValues: Object, ISolrImportCustomValues

    Sub FillValues(MbObject: IMetabaseObject; Values: ISolrFieldValues);

    Begin

        //Указание значений пользовательских полей
 для объекта с заданным ключом

        If MbObject.Key = 19815 Then

            Values.FindById("TAG", SearchEngineTargetType.SourceData).Value := "...";

        End If;

        //Если класс объекта соответствует табличному справочнику, то идёт индексация метаданных
 объектов

        If MbObject.ClassId = MetabaseObjectClass.KE_CLASS_STDDIM Then

            Values.FindById("COMMENTS", SearchEngineTargetType.MbObject).Value := "...";

        End If;

    End Sub FillValues;

End Class CSolrImportCustomValues;


Данный пример является макросом, содержащим реализацию метода, который
 заполняет значения пользовательских полей при индексации. Метод выполняется
 для каждого индексируемого объекта, в коде метода осуществляется проверка
 по ключу и классу объекта. В зависимости от выполненного условия осуществляется
 заполнение различных пользовательских полей.


См. также:


[ISolrImportCustomValues](ISolrImportCustomValues.htm)
 | [Системные
 и пользовательские поля](Setup.chm::/BISearch/Desktop_application_setting.htm#fields)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
