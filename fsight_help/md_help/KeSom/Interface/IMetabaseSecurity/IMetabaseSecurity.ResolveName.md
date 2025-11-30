# IMetabaseSecurity.ResolveName

IMetabaseSecurity.ResolveName
-


# IMetabaseSecurity.ResolveName


## Синтаксис


ResolveName(SubjectName: String): [ISecuritySubject](../ISecuritySubject/ISecuritySubject.htm);


## Параметры


SubjectName. Наименование
 субъекта безопасности.


## Описание


Метод ResolveName возвращает
 параметры субъекта безопасности, наименование которого передается в качестве
 параметра SubjectName.


## Комментарии


Если субъект безопасности не существует, то метод возвращает значение
 Null.


## Пример


Использование метода приведено в примере для [ILogonHours.SetPeriodAccess](../ILogonHours/ILogonHours.SetPeriodAccess.htm).


См. также:


[IMetabaseSecurity](IMetabaseSecurity.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
