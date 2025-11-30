# ICalcBlock.CopyEntries

ICalcBlock.CopyEntries
-


# ICalcBlock.CopyEntries


## Синтаксис


CopyEntries(EntryKeys: Array; DestFolder: Integer);


## Параметры


EntryKeys. Массив копируемых
 элементов;


DestFolder. Ключ папки, в которую
 будут скопированы элементы.


## Описание


Метод CopyEntries копирует указанные
 элементы в заданную папку.


## Комментарии


Массив EntryKeys может содержать
 ключи как отдельных формул, так и папок с формулами.


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM. В алгоритме расчёта добавлен блок
 расчёта. В блоке расчёта созданы формулы.


Добавьте ссылки на системные сборки: Algo, Metabase, Ms. Также добавьте
 [ссылку на сборку](../../Intro/KeAlgo_Programming.htm), необходимую
 для работы с алгоритмом расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo: ICalcObject;

	    CalcList: ICalcObjectsList;

	    CalcAlgo: ICalcAlgorithm;

	    CalcBlock: ICalcBlock;

	    Folder: IMsCalculationChainFolder;

	    EntryKeys: Array Of Integer;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Формирование списка объектов алгоритма

	    CalcList := CalcAlgo.Items.Clone;

	    CalcBlock := CalcList.Item(0) As ICalcBlock;

	    // Новая папка, в которую скопируем формулу

	    Folder := CalcBlock.AddFolder(CalcBlock.Folder);

	    Folder.Name := "Copy";

	    // Первая формула из имеющихся в дереве

	    EntryKeys := New Integer[1];

	    EntryKeys[0] := CalcBlock.Folder.Contents.Item(0).Key;

	    CalcBlock.CopyEntries(EntryKeys, Folder.Key);

	    // Сохранение изменений

	    CalcBlock.SaveObject;

	End Sub UserProc;


При выполнении примера в дереве формул блока расчёта будет создана новая
 папка. В эту папку будет скопирована первая имеющаяся формула блока расчёта.


См. также:


[ICalcBlock](ICalcBlock.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
