# IGxDocument.OwnMultiCopiesPrint

IGxDocument.OwnMultiCopiesPrint
-


# IGxDocument.OwnMultiCopiesPrint


## Синтаксис


OwnMultiCopiesPrint: Boolean;


## Описание


Свойство OwnMultiCopiesPrint
 определяет, будет ли автоматически указан номер экземпляра в тексте штампа
 маркировки при печати и экспорте отчёта.


## Комментарии


Свойство актуально для использования, если:


	- включен [мандатный
	 доступ](Admin.chm::/04_SecurityPolicy/Admin_PermSep_M.htm) или [доступ по
	 уровням безопасности](Admin.chm::/04_SecurityPolicy/Security_levels.htm);


	- включена [маркировка
	 документов при экспорте и печати](Admin.chm::/03_Admin/Admin_MandatAccessParam.htm);


	- задан текст штампа маркировки через [IGxStamp.Rtf](../IGxStamp/IGxStamp.Rtf.htm)
	 с использование подстановки &[COPYNUMBER].


Совет. Для отображения
 штампа маркировки независимо от применения мандатного доступа или доступа
 по уровням безопасности установите свойство [IMetabasePolicy.AlwaysPrintDocumentLabel](KeSom.chm::/Interface/IMetabasePolicy/IMetabasePolicy.AlwaysPrintDocumentLabel.htm)
 в True.


При значении True для автоматического
 указания номера экземпляра в тексте штампа маркировки печать отчета будет
 запускаться столько раз, сколько копий было задано в диалоге печати. Если
 была задана печать 5 копий, то печать будет последовательно запускаться
 5 раз. При экспорте отчета значение подстановки &[COPYNUMBER] будет
 равно единице.


Запуск печати отчета N раз имеет следующие особенности:


	- диалог печати не выдается повторно;


	- печать копий выполняется последовательно;


	- в протоколе доступа будет сделана только одна запись о печати
	 документа;


	- при пакетной печати печать будет запускаться N раз по M копий
	 каждого варианта отчета;


	- нет возможности управлять настройкой «Разобрать по копиям»,
	 так как эта настройка будет по умолчанию всегда включена.


Запуск печати отчета N раз доступен только в настольном приложении для
 экспресс-отчетов, регламентных отчетов и для книг анализа временных рядов.


По умолчанию свойство имеет значение False.


Значение свойства сохраняется вместе с отчетом.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT и формы, содержащей кнопку с идентификатором
 Button1 и компонент DocumentPrinter c идентификатором DocumentPrinter1.


Пример является обработчиком события OnClick для кнопки.


Добавьте ссылки на системные сборки: Metabase, Drawing.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    mb: IMetabase;

	    doc: IGxDocument;

	    MObj: IMetabaseObject;

	    Security: IMetabaseSecurity;

	    Stamps: IGxStamps;

	    Stamp: IGxStamp;

	    Lic: Object;

	Begin

	    // Получаем текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получаем единицу лицензирования

	    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

	    // Получаем отчёт

	    MObj := MB.ItemById("REPORT").Edit;

	    Doc := MObj As IGxDocument;

	    // Включаем использование номера экземпляра печати в штампе

	    Doc.OwnMultiCopiesPrint := True;

	    // Получим коллекцию штампов отчёта

	    Stamps := Doc.Stamps;

	    // Задаем настройки штампа, расположенного внизу страницы справа

	    Stamp := Stamps.RightBottom;

	    // Задаем расположение на первой странице

	    Stamp.Appearance := GxStampAppearance.FirstPage;

	    // Задаем отступ 0 мм слева и 10 мм сверху

	    Stamp.Offset := New GxSizeF.Create(0, 10);

	    // Задаем размер штампа - 40x30 мм

	    Stamp.Size := New GxSizeF.Create(40, 30);

	    // Задаем текст штампа

	    Stamp.Rtf := "{\rtf1\ansi\ansicpg1251\deff0\deflang1049{\fonttbl{\f0\fnil\fcharset240 Cambria;}}\viewkind4\uc1\pard\sa200\sl276\slmult1\lang9\b\f0\fs22 Копия &[CopyNumber]&nbsp;из &[TOTAL_COPIES]&nbsp;\par Страница: &[Page]&nbsp;из &[Pages]&nbsp;\par}";

	    // Выводим отчёт на предпросмотр

	    DocumentPrinter1.Document := Doc;

	    DocumentPrinter1.PrintPreview(0, Null, True);

	    Lic := Null;

	End Sub Button1OnClick;


В результате выполнения примера для отчёта будет задан штамп маркировки,
 который будет выводиться при экспорте и печати независимо от других настроек.
 В штампе маркировки будет отображаться номер экземпляра печати и номер
 страницы относительно общего числа страниц в документе. Отчёт будет выведен
 на предварительный просмотр.


См. также:


[IGxDocument](IGxDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
