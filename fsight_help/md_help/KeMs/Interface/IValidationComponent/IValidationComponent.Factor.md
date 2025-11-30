# IValidationComponent.Factor

IValidationComponent.Factor
-


# IValidationComponent.Factor


## Синтаксис


Factor: [IRubricatorFactor](KeCubes.chm::/Interface/IRubricatorFactor/IRubricatorFactor.htm);


## Описание


Свойство Factor возвращает показатель.


## Комментарии


Используя свойство Factor можно получить данные показателя.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных временных рядов с идентификатором «OBJ_RUBRICATOR», содержащей правило валидации «VALID_FILTER» (сравнение отклонений между результирующим рядом и исходными рядами, на основе которых был получен результирующий ряд).


Также необходимо добавить ссылки на системные сборки «Metabase», «Ms», «Cubes».


			Sub UserProc;

Var

    Mb: IMetabase;

    RubrDescr: IMetabaseObjectDescriptor;

    Valid: IValidationFilter;

    Date: DateTime;

    SerArr: Array Of Variant;

    i: Integer;

    ValComponent: IValidationComponent;

    Factor: IRubricatorFactor;

Begin

    Mb := MetabaseClass.Active;

    RubrDescr := Mb.ItemById("OBJ_RUBRICATOR");

    Valid := Mb.ItemByIdNamespace("VALID_FILTER", RubrDescr.Key).Bind As IValidationFilter;

    Date := DateTime.ComposeDay(2000, 1, 1);

    SerArr := Valid.GetComponentsByFactor(10024, Date, True);

    If Not isNull(SerArr) And (SerArr.Length > 0) Then

        For i := 0 To SerArr.Length - 1 Do

            ValComponent := (SerArr[i] As IValidationComponent);

            Factor := ValComponent.Factor;

            Debug.WriteLine("Компонент " + i.ToString + " " + Factor.Factor.ToString + "  rev=" + ValComponent.RevisionKey.ToString);

        End For;

    Else

        Debug.WriteLine("Компонентов нет");

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены ряды-компоненты, для которых был сделан расчет валидации для показателя с ключом «10024».


См. также:


[IValidationComponent](IValidationComponent.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
