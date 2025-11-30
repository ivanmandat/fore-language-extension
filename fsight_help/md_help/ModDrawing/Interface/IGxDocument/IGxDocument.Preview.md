# IGxDocument.Preview

IGxDocument.Preview
-


# IGxDocument.Preview


## Синтаксис


Preview(Format: [IGxImageFormat](../IGxImageFormat/IGxImageFormat.htm)):
 [IGxImage](../IGxImage/IGxImage.htm);


## Параметры


Format. Формат изображения
 для предварительного просмотра отчета.


## Описание


Свойство Preview возвращает
 изображение, используемое для предварительного просмотра отчётов.


## Комментарии


Предварительный просмотр в виде изображения первой страницы доступен
 для отчётов, созданных с помощью инструментов «Аналитические панели»,
 «Аналитические запросы (OLAP)», «Отчёты» и «Анализ временных рядов».


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента ImageBox с наименованием
 ImageBox1. В репозитории предполагается наличие регламентного отчёта с
 идентификатором REPORT.


Добавьте ссылки на системные сборки: Drawing, Metabase.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Mb: IMetabase;

	    Doc: IGxDocument;

	    Img: IGxImage;

	Begin

	    Mb := MetabaseClass.Active;

	    Doc := Mb.ItemById("REPORT").Bind As IGxDocument;

	    Img := Doc.Preview(GxImageFormats.Png);

	    ImageBox1.Image := Img;

	End Sub Button1OnClick;


При нажатии на кнопку в компонент ImageBox1 будет загружено изображение
 предварительного просмотра отчёта.


См. также:


[IGxDocument](IGxDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
