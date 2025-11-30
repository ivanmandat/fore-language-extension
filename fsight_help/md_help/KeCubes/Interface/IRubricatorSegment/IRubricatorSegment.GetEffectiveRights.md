# IRubricatorSegment.GetEffectiveRights

IRubricatorSegment.GetEffectiveRights
-


# IRubricatorSegment.GetEffectiveRights


## Синтаксис


GetEffectiveRights: Integer;


## Описание


Метод GetEffectiveRights возвращает
 эффективные права текущего пользователя на сегмент.


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
 с маской доступа](KeSom.chm::/Examples/Example_2_AccessMask.htm). При раздаче прав на сегмент используются
 соответствующие операции Read
 и Write.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR, в которой должны быть
 определены сегменты.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubInst: IRubricatorInstance;

    Segs: IRubricatorSegments;

    Seg: IRubricatorSegment;

Begin

    Mb := MetabaseClass.Active;

    RubInst := Mb.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    Segs := RubInst.Segments;

    Seg := Segs.Item(0);

    Debug.WriteLine(Seg.GetEffectiveRights);

End Sub UserProc;


После выполнения примера эффективные права текущего пользователя на
 первый сегмент данных будут выведены в окно консоли в десятичной форме.


См. также:


[IRubricatorSegment](IRubricatorSegment.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
