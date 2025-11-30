# ILaner.CreateDerivedSeries

ILaner.CreateDerivedSeries
-


# ILaner.CreateDerivedSeries


## Синтаксис


CreateDerivedSeries: [LnOptionState](../../Enums/LnOptionState.htm);


## Описание


Свойство CreateDerivedSeries
 определяет, отображать ли дочерние ряды у вычисляемых рядов.


## Комментарии


Данная настройка перекрывает настройки видимости отдельных рядов.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочей
 книги с идентификатором «WORKBOOK_CALC», содержащей несколько рядов с
 данными.


Добавьте ссылки на системные сборки: Express, Laner, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    WbkObj: IMetabaseObject;

    EaxAn: IEaxAnalyzer;

    Laner: ILaner;

    Serie: ILanerSerie;

Begin

    // Получаем рабочую книгу

    mb := MetabaseClass.Active;

    WbkObj := mb.ItemById("WORKBOOK_CALC").Edit;

    EaxAn := WbkObj As IEaxAnalyzer;

    // Получаем объект для выполнения операций с рабочей книгой

    Laner := EaxAn.Laner;

    // Скрываем дочерние ряды у вычислимых рядов

    Laner.CreateDerivedSeries := LnOptionState.offOption;

    // Сохраняем изменения

    WbkObj.Save;

End Sub UserProc;


В результате выполнения примера в рабочей книге будут скрыты дочерние
 ряды у вычисляемых рядов.


См. также:


[ILaner](ILaner.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
