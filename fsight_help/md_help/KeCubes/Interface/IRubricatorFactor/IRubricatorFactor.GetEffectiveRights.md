# IRubricatorFactor.GetEffectiveRights

IRubricatorFactor.GetEffectiveRights
-


# IRubricatorFactor.GetEffectiveRights


## Синтаксис


GetEffectiveRights: Integer;


## Описание


Метод GetEffectiveRights возвращает
 эффективные права текущего пользователя на показатель.


## Комментарии


Эффективные права включают в себя все операции, на которые для пользователя
 установлено явное разрешение. Значение, возвращаемое данным методом, представляет
 из себя маску доступа. Значение маски является 8-ми байтовым двоичным
 числом, приведенным в десятичную форму. Для проверки значения маски необходимо
 использовать значения перечислимого типа [MetabaseObjectPredefinedRights](KeSom.chm::/Enums/MetabaseObjectPredefinedRights.htm)
 в комбинации с [CubeSpecificRights](KeSom.chm::/Enums/CubeSpecificRights.htm).
 Для разбора значения маски необходимо реализовать пользовательскую функцию,
 которая позволит сопоставить отдельные биты маски соответствующим значениям
 перечислений. Пример работы с маской доступа представлен в разделе [Примеры: Работа
 с маской доступа](KeSom.chm::/Examples/Example_2_AccessMask.htm). При раздаче прав на показатель используются
 соответствующие операции Read
 и Write.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR. В данной базе должны
 быть определены сегменты и присутствовать показатель с ключом 89817.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubInst: IRubricatorInstance;

    Fac: IRubricatorFactor;

Begin

    Mb := MetabaseClass.Active;

    RubInst := Mb.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    Fac := rubInst.GetFactData(89817).Factor;

    Debug.WriteLine(Fac.GetEffectiveRights);

End Sub UserProc;


После выполнения примера в окно консоли будут выведены эффективные права
 текущего пользователя на показатель с указанным ключом. Права будут представлены
 в десятичном виде.


См. также:


[IRubricatorFactor](IRubricatorFactor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
