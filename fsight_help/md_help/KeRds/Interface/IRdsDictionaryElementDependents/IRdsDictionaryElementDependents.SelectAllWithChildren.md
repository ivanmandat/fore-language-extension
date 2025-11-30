# IRdsDictionaryElementDependents.SelectAllWithChildren

IRdsDictionaryElementDependents.SelectAllWithChildren
-


# IRdsDictionaryElementDependents.SelectAllWithChildren


## Синтаксис


SelectAllWithChildren: [IMbElementDependencies](KeSom.chm::/Interface/IMbElementDependencies/IMbElementDependencies.htm);


## Описание


Метод SelectAllWithChildren
 возвращает коллекцию зависимостей от элемента [Element](IRdsDictionaryElementDependents.Element.htm)
 и всех его дочерних элементов.


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

    If Not Depends.IsEmptyWithChildren Then

        MBDepend := Depends.SelectAllWithChildren;

        MBDepend.Database.Delete(MBDepend.Where);

    End If;

End Sub UserProc;


При выполнении примера будет осуществлена проверка наличия зависимостей
 от указанного элемента, а также всех его дочерних элементов справочника
 НСИ. Если какие-либо зависимости существуют, то они будут удалены.


См. также:


[IRdsDictionaryElementDependents](IRdsDictionaryElementDependents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
