# ILanerSerie.Kind

ILanerSerie.Kind
-


# ILanerSerie.Kind


## Синтаксис


Kind: [LnSerieKind](../../Enums/LnSerieKind.htm);


## Описание


Свойство Kind возвращает тип
 ряда.


## Пример


Для выполнения примера в репозитории необходимо наличие рабочей книги
 с идентификатором WORKBOOK. В рабочей области должна содержаться база
 данных временных рядов.


Добавьте ссылки на системные сборки: Express, Laner, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Workbook: IEaxAnalyzer;

    Laner: ILaner;

    Serie: ILanerSerie;

    SourceSerie: ILanerCalculateSerie;

Begin

    // Получим текущий репозиторий

    MB := MetabaseClass.Active;

    // Получим рабочую книгу

    Workbook := MB.ItemById("WORKBOOK").Bind As IEaxAnalyzer;

    // Получим рабочую область каталога показателей

    Laner := Workbook.Laner;

    // Получим первый ряд рабочей области

    Serie := Laner.Series.Item(0);

    // Выведем в консоль ключ ревизии, если ряд основан на показателе

    If Serie.Kind = LnSerieKind.Source Then

        SourceSerie := Serie As ILanerCalculateSerie;

        If SourceSerie.RevisionKey <> 0 Then

            Debug.WriteLine("Ключ ревизии: " + SourceSerie.RevisionKey.ToString);

        End If;

    End If;

End Sub UserProc;


После выполнения примера в консоль будет выведен ключ текущей ревизии
 первого ряда рабочей области.


См. также:


[ILanerSerie](ILanerSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
