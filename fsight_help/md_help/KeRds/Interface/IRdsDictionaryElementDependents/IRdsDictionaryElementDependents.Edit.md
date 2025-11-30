# IRdsDictionaryElementDependents.Edit

IRdsDictionaryElementDependents.Edit
-


# IRdsDictionaryElementDependents.Edit


## Синтаксис


Edit: [IRdsDictionaryElementDependents](IRdsDictionaryElementDependents.htm);


## Описание


Метод Edit открывает коллекцию
 зависимостей от элемента на редактирование.


## Комментарии


Для сохранения изменений в коллекции зависимостей используйте метод
 [IRdsDictionaryElementDependents.Save](IRdsDictionaryElementDependents.Save.htm).


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 «RDS». В данном репозитории создан справочник НСИ с идентификатором «Country».
 Для справочника включено отслеживание ссылок на элементы.


			Sub UserProc;

Var

    MB: IMetabase;

    Dict: IRdsDictionary;

    Elements: IRdsDictionaryElements;

    Depends: IRdsDictionaryElementDependents;

    MBDepend: IMbElementDependencies;

Begin

    MB := MetabaseClass.Active;

    Dict := MB.ItemByIdNamespace("Country", MB.GetObjectKeyById("RDS")).Bind As IRdsDictionary;

    Elements := (Dict.Open(Null) As IRdsDictionaryInstance).Elements;

    Depends := Elements.Dependents(Elements.Element(1));

    If Not Depends.IsEmpty Then

        Depends.Edit;

        MBDepend := Depends.Objects As IMbElementDependencies;

        MBDepend.Clear;

        Depends.Save;

    End If;

End Sub UserProc;


При выполнении примера будет осуществлена проверка наличия зависимостей
 от указанного элемента справочника НСИ. Если зависимости существуют, то
 они будут удалены.


См. также:


[IRdsDictionaryElementDependents](IRdsDictionaryElementDependents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
