# ISecurityDescriptor.LabelSecurity

ISecurityDescriptor.LabelSecurity
-


# ISecurityDescriptor.LabelSecurity


## Синтаксис


LabelSecurity: [ISecurityLabels](../ISecurityLabels/ISecurityLabels.htm);


## Описание


Свойство LabelSecurity возвращает
 параметры меток безопасности объекта.


## Комментарии


Свойство актуально только для табличных, вычисляемых справочников и
 обычных и составных справочников НСИ.


## Пример


Для выполнения примера в репозитории предполагается наличие справочника
 НСИ с идентификатором RDS_DICT.


			Sub Main;

Var

    MB: IMetabase;

    MDesc: IMetabaseObjectDescriptor;

    SecDesc: ISecurityDescriptor;

    SecLab: ISecurityLabels;

Begin

    MB := MetabaseClass.Active;

    MDesc := MB.ItemById("RDS_DICT");

    SecDesc := MDesc.SecurityDescriptor;

    SecDesc.Edit;

    SecLab := SecDesc.LabelSecurity;

    SecLab.Mapping(4) := MB.Security.Users.Item(1);

    SecDesc.Apply(True);

End Sub Main;


После выполнения примера в настройках меток безопасности справочника
 четвертому биту маски будет сопоставлен второй пользователь текущего репозитория.


См. также:


[ISecurityDescriptor](ISecurityDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
