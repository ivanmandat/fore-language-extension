# IMbElementDependenciesDatabase.Delete

IMbElementDependenciesDatabase.Delete
-


# IMbElementDependenciesDatabase.Delete


## Синтаксис


Delete(Where: [IMbElementDependencyTemplate](../IMbElementDependencyTemplate/IMbElementDependencyTemplate.htm));


## Параметры


Where - шаблон, в соответствии с которым будет осуществлено удаление.


## Описание


Метод Delete осуществляет удаление зависимостей, соответствующих указанному шаблону.


## Пример


Для выполнения примера предполагается наличие в репозитории и справочника НСИ с идентификатором «Country». Для справочника включено отслеживание ссылок на элементы из других объектов репозитория. Справочник хранится в репозитории НСИ с идентификатором «RDS».


			Sub UserProc;

Var

    MB: IMetabase;

    Dictionary: IMetabaseObjectDescriptor;

    DepDB: IMbElementDependenciesDatabase;

    Template: IMbElementDependencyTemplate;

    Elements: IRdsDictionaryElements;

    b: Boolean;

Begin

    MB := MetabaseClass.Active;

    DepDB := MB.ElementDependenciesDatabase;

    Dictionary := MB.ItemByIdNamespace("Country", MB.ItemById("RDS").Key);

    Elements := (Dictionary.Open(Null) As IRdsDictionaryInstance).Elements;

    Template := New MbElementDependencyTemplateClass.CreateByElement(

        Dictionary.Key, Elements.Element(1));

    If DepDB.Exists(Template) Then

        WinApplication.YesNoCancelBox("Зависимости существуют. Удалить зависимости от элемента?", b);

        If b Then

            DepDB.Delete(Template)

        End If;

    End If;

End Sub UserProc;


При выполнении примера будет осуществлена проверка наличия зависимостей объектов репозитория от указанного элемента справочника. Если зависимости существуют, то будет выдан диалог подтверждения их удаления. При нажатии кнопки «ОК» зависимости будут удалены.


См. также:


[IMbElementDependenciesDatabase](IMbElementDependenciesDatabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
