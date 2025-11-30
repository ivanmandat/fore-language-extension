# ISecurityDocumentLabel.IsON

ISecurityDocumentLabel.IsON
-


# ISecurityDocumentLabel.IsON


## Синтаксис


IsON: Boolean;


## Описание


Свойство IsON возвращает признак включенной маркировки объектов.


## Комментарии


Свойство возвращает значение True, если для объектов установлен уровень доступа, предусматривающий маркировку объектов при печати и экспорте.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта с идентификатором «Obj_1».


			Sub Main;
Var

    MB: IMetabase;

    MDesc: IMetabaseObjectDescriptor;

    SecDesc: ISecurityDescriptor;

    Subj: ISecuritySubject;

    i, j: Integer;

    Lab: ISecurityDocumentLabel;
Begin

    MB := MetabaseClass.Active;

    Subj := MB.Security.Users.Item(0);

    MDesc := MB.ItemById("Obj_1");

    SecDesc := MDesc.SecurityDescriptor;

    SecDesc.GetEffectiveRightsAuditLabel(Subj As ISecuritySubject, 1, i, j, Lab);

    If Lab.IsON Then

        Debug.WriteLine(Lab.Label);

        Debug.WriteLine(Lab.LabelDescription);

        Debug.WriteLine(Lab.TreatSectionAsDocument);

        Debug.WriteLine(Lab.User.Name);

    End If;
End Sub Main;


После выполнения примера в переменных «i» и «j» будут содержаться значения, соответствующие эффективным правам доступа и аудита доступа первого пользователя, содержащегося в менеджере безопасности, на указанный объект репозитория. Если в репозитории включен мандатный контроль доступа и для объекта выставлен уровень, для которого предусмотрена маркировка объектов при экспорте и печати, то в переменной «Lab» будут содержаться параметры метки безопасности, используемой для маркировки. Данные параметры будут выведены в консоль среды разработки.


См. также:


[ISecurityDocumentLabel](ISecurityDocumentLabel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
