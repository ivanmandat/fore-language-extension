# SecuritySubjectMemberOfO

SecuritySubjectMemberOfO
-


# SecuritySubjectMemberOfO


## Описание


Перечисление SecuritySubjectMemberOfO
 содержит параметры получения групп, в которые входит субъект безопасности.


Используется следующим методом:


	- [ISecuritySubject.MemberOfO](../Interface/ISecuritySubject/ISecuritySubject.MemberOfO.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Default_. Значение
		 по умолчанию, при этом метод будет выполнен также, как и метод
		 [ISecuritySubject.MemberOf](../Interface/ISecuritySubject/ISecuritySubject.MemberOf.htm).


		 2097152
		 GetStored. Зарезервировано
		 для внутреннего использования.


		 33554432
		 CheckSsExists. Зарезервировано
		 для внутреннего использования.


		 67108864
		 NoNTFetch. Не обращаться
		 за информацией к службе каталогов, возвращать список групп, кешированный
		 в репозитории.


		 268435456
		 NoGroupInGroup. Зарезервировано
		 для внутреннего использования.


## Комментарии


Если в организации, где будет использоваться прикладной проект, организована
 сложная структура служб каталогов, то использование метода [ISecuritySubject.MemberOfO](../Interface/ISecuritySubject/ISecuritySubject.MemberOfO.htm)
 с параметром NoNTFetch может значительно
 сократить время выполнения метода.


См. также:


[Перечисления
 сборки Metabase](KeSom_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
