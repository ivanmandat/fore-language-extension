# IRdsAttribute.ObjectLinked

IRdsAttribute.ObjectLinked
-


# IRdsAttribute.ObjectLinked


## Синтаксис


ObjectLinked: Boolean;


## Описание


Свойство ObjectLinked определяет,
 является ли атрибут справочника НСИ ссылкой на объект репозитория.


## Комментарии


Допустимые значения:


	- True. Атрибут является
	 ссылкой на объект репозитория;


	- False. Атрибут
	 не является ссылкой на объект репозитория.


## Пример


Для выполнения примера предполагается наличие справочника НСИ с идентификатором
 «DIM.


Добавьте ссылки на системные сборки Metabase, Rds.


			Sub UserProc;

Var

    MB: IMetabase;

    rds: IRdsDictionary;

    Attr: IRdsAttribute;

Begin

    MB := MetabaseClass.Active;

    rds := MB.ItemById("DIM").Edit As IRdsDictionary;

    Attr := rds.Attributes.Add;

    Attr.Name := "ATTR";

    Attr.Id := "ATTR";

    Attr.ObjectLinked := True;

    (rds As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера в указанный справочник будет добавлен
 атрибут с идентификатором «ATTR», являющийся ссылкой на объект репозитория.


См. также:


[IRdsAttribute](IRdsAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
