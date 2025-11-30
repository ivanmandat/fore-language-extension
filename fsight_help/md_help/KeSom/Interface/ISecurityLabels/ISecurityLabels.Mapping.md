# ISecurityLabels.Mapping

ISecurityLabels.Mapping
-


# ISecurityLabels.Mapping


## Синтаксис


Mapping(BitIndex: Integer): [ISecuritySubject](../ISecuritySubject/ISecuritySubject.htm);


## Параметры


BitIndex. Бит маски доступа,
 в соответствие с которым ставится субъект безопасности.


## Описание


Свойство Mapping определяет
 карту соответствия битов маски субъектам безопасности.


## Комментарии


Примеры по работе с правами доступа приведены в подразделах «[Управление правами доступа
 к элементам](KeRds.chm::/Samples/KeRds_Sample6.htm)» и «[Управление правами доступа
 к атрибутам](KeRds.chm::/Samples/KeRds_Sample7.htm)».


## Пример


Для выполнения примера предполагается наличие табличного справочника
 с идентификатором Dim_1.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MDesc: IMetabaseObjectDescriptor;

	    SecDesc: ISecurityDescriptor;

	    SecLab: ISecurityLabels;

	Begin

	    MB := MetabaseClass.Active;

	    MDesc := MB.ItemById("Dim_1");

	    SecDesc := MDesc.SecurityDescriptor;

	    SecDesc.Edit;

	    SecLab := SecDesc.LabelSecurity;

	    SecLab.Mapping(4) := MB.Security.Users.Item(1);

	    SecDesc.Apply(False);

	End Sub UserProc;


После выполнения примера четвертому биту маски будет сопоставлен второй
 пользователь текущего репозитория.


См. также:


[ISecurityLabels](ISecurityLabels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
