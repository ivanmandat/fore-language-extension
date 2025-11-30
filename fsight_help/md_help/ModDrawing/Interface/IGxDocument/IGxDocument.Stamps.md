# IGxDocument.Stamps

IGxDocument.Stamps
-


# IGxDocument.Stamps


## Синтаксис


Stamps: [IGxStamps](../IGxStamps/IGxStamps.htm);


## Описание


Свойство Stamps определяет набор
 [штампов
 маркировки](Admin.chm::/04_SecurityPolicy/Editor_of_Politicy/Admin_MandatAccess_Marking.htm) документа.


## Комментарии


Для конвертации текста штампа в формат rtf можно использовать метод
 [ITextConverter.Export](ForeSys.chm::/Interface/ITextConverter/ITextConverter.Export.htm).


Условия отображения штампов маркировки приведены в описании интерфейса
 [IGxStamp](../IGxStamp/IGxStamp.htm).


Совет. Для отображения
 штампа маркировки независимо от применения мандатного доступа или доступа
 по уровням безопасности установите свойство [IMetabasePolicy.AlwaysPrintDocumentLabel](KeSom.chm::/Interface/IMetabasePolicy/IMetabasePolicy.AlwaysPrintDocumentLabel.htm)
 в True.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором REGULAR_REPORT.


Добавьте ссылки на системные сборки: Drawing, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Doc: IGxDocument;

	    Stamps: IGxStamps;

	    Stamp: IGxStamp;

	Begin

	    // Получим объект метабазы

	    MB := MetabaseClass.Active;

	    // Получим регламентный отчёт

	    MObj := MB.ItemById("REGULAR_REPORT").Edit;

	    // Приведем полученный объект к IGxDocument

	    Doc := MObj As IGxDocument;

	    // Получим коллекцию штампов отчёта

	    Stamps := Doc.Stamps;

	    // Настроим штамп  маркировки, отображаемый снизу слева

	    Stamp := stamps.LeftBottom;

	    // Задаем расположение штампа на первой странице

	    Stamp.Appearance := GxStampAppearance.FirstPage;

	    // Задаем отступ 30 мм слева и 20 мм сверху

	    Stamp.Offset := New GxSizeF.Create(30, 20);

	    // Задаем размер 40x30 мм

	    Stamp.Size := New GxSizeF.Create(40, 30);

	    // Задаем текст штампа

	    Stamp.Rtf := "{\rtf1\ansi\ansicpg1251\deff0\deflang1049{\fonttbl{\f0\fnil\fcharset240 Cambria;}}\viewkind4\uc1\pard\sa200\sl276\slmult1\lang9\b\f0\fs22 Страница: &[Page]&nbsp;из &[Pages]&nbsp;\par}";

	    MObj.Save;

	End Sub UserProc;


После выполнения примера для отчета будет задан нижний левый штамп маркировки,
 который будет выводиться при экспорте и печати отчета. В штампе маркировки
 будет отображаться номер страницы из общего числа страниц.


См. также:


[IGxDocument](IGxDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
