# IRubricatorFactor.GetSubjectEffectiveRights

IRubricatorFactor.GetSubjectEffectiveRights
-


# IRubricatorFactor.GetSubjectEffectiveRights


## Синтаксис


GetSubjectEffectiveRights(Subject: [ISecuritySubject](KeSom.chm::/Interface/ISecuritySubject/ISecuritySubject.htm)):
 Integer;


## Параметры


Subject. Субъект безопасности,
 эффективные права которого необходимо получить.


## Описание


Метод GetSubjectEffectiveRights
 возвращает эффективные права указанного пользователя на показатель.


## Комментарии


Эффективные права включают в себя все операции, на которые для пользователя
 установлено явное разрешение. Значение, возвращаемое данным методом, представляет
 из себя маску доступа. Значение маски является 8-ми байтовым двоичным
 числом, приведенным в десятичную форму. Для проверки значения маски необходимо
 использовать значения перечисляемого типа [MetabaseObjectPredefinedRights](KeSom.chm::/Enums/MetabaseObjectPredefinedRights.htm)
 в комбинации с [CubeSpecificRights](KeSom.chm::/Enums/CubeSpecificRights.htm).
 Для разбора значения маски необходимо реализовать пользовательскую функцию,
 которая позволит сопоставить отдельные биты маски соответствующим значениям
 перечислений. Пример работы с маской доступа представлен в разделе «[Работа с маской
 доступа](KeSom.chm::/Examples/Example_2_AccessMask.htm)». При раздаче прав на показатель используются
 соответствующие операции Read
 и Write.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «OBJ_RUBRICATOR», в которой определены
 [сегменты](../IRubricatorSegment/IRubricatorSegment.htm) и
 в [таблице
 метасправочника фактов](KnowledgeBase.chm::/01_Fore/knowledgebase_kb000036.htm) содержится значение «3» в столбце
 «Факты».


Для выполнения примера добавьте ссылки на системные сборки: Cubes, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    RubInst: IRubricatorInstance;

    Fac: IRubricatorFactor;

    MS: IMetabaseSecurity;

    User: IMetabaseUser;

Begin

    MB := MetabaseClass.Active;

    RubInst := MB.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    Fac := RubInst.GetFactData(3).Factor;

    MS := MB.Security;

    User := MS.ResolveName("ADMIN") As IMetabaseUser;

    Debug.WriteLine(Fac.GetSubjectEffectiveRights(User));

End Sub UserProc;


После выполнения примера в консоль будут выведены эффективные права
 пользователя ADMIN на показатель фактов с ключом «3». Права будут представлены
 в десятичном виде.


См. также:


[IRubricatorFactor](IRubricatorFactor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
