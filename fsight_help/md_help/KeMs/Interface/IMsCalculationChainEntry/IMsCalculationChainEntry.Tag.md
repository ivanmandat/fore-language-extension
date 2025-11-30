# IMsCalculationChainEntry.Tag

IMsCalculationChainEntry.Tag
-


# IMsCalculationChainEntry.Tag


## Синтаксис


		Tag: Variant;


## Описание


Свойство Tag
 не учитывается компилятором, поэтому может быть использовано пользователем
 по его усмотрению.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором OBJ_CONT. В данном контейнере должна содержаться
 метамодель с идентификатором OBJ_META.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    ContKey: Integer;

		    MModel: IMsMetaModel;

		    Parent: IMsCalculationChainEntries;

		    ChainEntry: IMsCalculationChainEntry;

		Begin

		    Mb := MetabaseClass.Active;

		    ContKey := Mb.GetObjectKeyById("OBJ_CONT");

		    MModel := Mb.ItemByIdNamespace("OBJ_META",ContKey).Edit As IMsMetaModel;

		    Parent := MModel.CalculationChain;

		    ChainEntry := Parent.Item(0);

		    ChainEntry.Tag := "Первый
		 элемент";

		    (MModel As IMetabaseObject).Save;

		End Sub UserProc;


После выполнения примера для первого элемента в цепочке метамодели в
 свойстве Tag будет содержаться
 комментарий.


См. также:


[IMsCalculationChainEntry](IMsCalculationChainEntry.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
