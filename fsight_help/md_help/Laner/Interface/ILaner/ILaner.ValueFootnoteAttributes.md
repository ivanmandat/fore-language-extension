# ILaner.ValueFootnoteAttributes

ILaner.ValueFootnoteAttributes
-


# ILaner.ValueFootnoteAttributes


## Синтаксис


ValueFootnoteAttributes: [ILanerCellAttributes](../ILanerCellAttributes/ILanerCellAttributes.htm);


## Описание


Свойство ValueFootnoteAttributes
 возвращает коллекцию атрибутов, используемых для формирования сносок в
 области данных.


## Пример


Для выполнения примера предполагается наличие в репозитории рабочей
 книги с идентификатором «WORKBOOK», содержащей несколько рядов. Данная
 рабочая книга должна использовать в качестве источника данных базу данных
 временных рядов, содержащую обязательный атрибут рядов с идентификатором
 «COUNTRY».


			Sub UserProc;

Var

    MB: IMetabase;

    WbkObj: IMetabaseObject;

    Laner: ILaner;

    FootnoteAttributes: ILanerCellAttributes;

Begin

    // Получаем рабочую книгу

    MB := MetabaseClass.Active;

    WbkObj := MB.ItemById("WORKBOOK").Edit;

    Laner := (WbkObj As IEaxAnalyzer).Laner;

    // Получаем коллекцию атрибутов сносок для
 заголовков рядов

    FootnoteAttributes := Laner.ValueFootnoteAttributes;

    // Очищаем коллекцию

    FootnoteAttributes.Clear;

    // Добавляем атрибут "COUNTRY" в коллекцию атрибутов префикса

    FootnoteAttributes.Add("COUNTRY", LnAttributeType.Fact);

    // Сохраняем изменения

    WbkObj.Save;

End Sub UserProc;


В результате выполнения примера для данных в рабочей книге будут добавлены
 сноски. Текст сносок будет формироваться по значениям атрибута рядов «COUNTRY».


См. также:


[ILaner](ILaner.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
