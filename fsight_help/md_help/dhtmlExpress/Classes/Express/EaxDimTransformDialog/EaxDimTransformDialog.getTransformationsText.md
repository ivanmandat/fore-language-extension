# EaxDimTransformDialog.getTransformationsText

EaxDimTransformDialog.getTransformationsText
-


# EaxDimTransformDialog.getTransformationsText


## Синтаксис


getTransformationsText();


## Описание


Метод getTransformationsText
 возвращает видимый текст редактора формул.


## Комментарии


В редакторе формул используются термы, которые содержат текст и формулу.
 Термы с внутренней формулой подсвечиваются синим цветом и удаляются только
 целиком. Редактирование термов возможно по двойному щелчку, при этом текст
 терма заменяется на формулу.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TransformDialog](dhtmlUfe.chm::/Components/TransformDialog/TransformDialog.htm)
 с наименованием «dialog» (см.
 «[Пример
 создания компонента TransformDialog](dhtmlUfe.chm::/Components/TransformDialog/Example_TransformDialog.htm)»). Получим видимый
 текст из редактора формул:


window.dialog..getTransformationsText();
В результате выполнения примера в консоли будет выведен текст редактора
 формул.


См. также:


[EaxDimTransformDialog](EaxDimTransformDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
