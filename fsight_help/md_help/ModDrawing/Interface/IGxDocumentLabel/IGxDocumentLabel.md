# IGxDocumentLabel

IGxDocumentLabel
-


# IGxDocumentLabel


Сборка: Drawing;


## Описание


Интерфейс IGxDocumentLabel возвращает
 параметры штампа, который используется для маркировки документов при печати
 и экспорте.


## Комментарии


[Штамп
 маркировки](Admin.chm::/04_SecurityPolicy/Editor_of_Politicy/Admin_MandatAccess_Marking.htm), заданный через интерфейс, будет применяться
 для всех отчетов
 и документов репозитория.


Для определенного отчета можно настроить уникальный штамп маркировки,
 используя свойство [IGxDocument.Stamps](../IGxDocument/IGxDocument.Stamps.htm).


Условия отображения штампов маркировки приведены в [IGxStamp](../IGxStamp/IGxStamp.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Department](IGxDocumentLabel.Department.htm)
		 Свойство Department
		 возвращает значение подстановки &[DEPARTMENT], которая может
		 использоваться в штампе маркировки.


		 ![](../../Property_Image.gif)
		 [IsOn](IGxDocumentLabel.IsOn.htm)
		 Свойство IsOn возвращает
		 True, если включена маркировка
		 объектов при экспорте и печати.


		 ![](../../Property_Image.gif)
		 [LabelDescription](IGxDocumentLabel.LabelDescription.htm)
		 Свойство LabelDescription
		 возвращает описание, которое будет использовано при маркировке
		 объектов при экспорте и печати.


		 ![](../../Property_Image.gif)
		 [Mark](IGxDocumentLabel.Mark.htm)
		 Свойство Mark возвращает
		 наименование уровня безопасности, на котором производится печать
		 (экспорт) документа.


		 ![](../../Property_Image.gif)
		 [Name](IGxDocumentLabel.Name.htm)
		 Свойство Name возвращает
		 значение подстановки &[NAME], которая может использоваться
		 в штампе маркировки.


		 ![](../../Property_Image.gif)
		 [Scheme](IGxDocumentLabel.Scheme.htm)
		 Свойство Scheme возвращает
		 наименование репозитория, из которого производится печать (экспорт)
		 документа.


		 ![](../../Property_Image.gif)
		 [TreatSectionAsDocument](IGxDocumentLabel.TreatSectionAsDocument.htm)
		 Свойство TreatSectionAsDocument
		 возвращает признак маркировки секций объекта как отдельных документов
		 при печати и экспорте.


		 ![](../../Property_Image.gif)
		 [UserId](IGxDocumentLabel.UserId.htm)
		 Свойство UserId возвращает
		 идентификатор субъекта безопасности, осуществляющего печать (экспорт)
		 документа.


		 ![](../../Property_Image.gif)
		 [UserName](IGxDocumentLabel.UserName.htm)
		 Свойство UserName возвращает
		 наименование субъекта безопасности, осуществляющего печать (экспорт)
		 документа.


См. также:


[Интерфейсы сборки Drawing](../ModDrawing_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
