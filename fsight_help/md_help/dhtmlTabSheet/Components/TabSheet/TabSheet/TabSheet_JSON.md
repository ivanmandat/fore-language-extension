# JSON объект компонента TabSheet

JSON объект компонента TabSheet
-


# JSON объект компонента TabSheet


JSON структура представляет собой упорядоченный набор значений. С большинством
 свойств и настроек компонента [TabSheet](TabSheet.htm) доступна
 работа через JSON-объект, например при создании нового компонента. В примере
 создания компонента TabSheet приведено использование [JSON
 объекта](TabSheet_Example.htm#json).


Структура JSON объекта компонента TabSheet может содержать в себе следующие
 объекты:


	- [Structure](TabSheet_JSON.htm#structure);


	- [Cells](TabSheet_JSON.htm#cells);


	- [Styles](TabSheet_JSON.htm#styles);


	- [Images](TabSheet_JSON.htm#images);


	- [TabObjectsImages](TabSheet_JSON.htm#tabobjectsimage).


## Структура объекта Structure


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 @MUR
		 MaxUsedRow
		 Максимальный индекс используемой строки.
		 Integer, от 0


		 @MUC
		 MaxUsedColumn
		 Максимальный индекс используемого столбца.
		 Integer, от 0


		 @MR
		 MaxRow
		 Максимальный индекс строки.
		 Integer, от 0 до 1048574


		 @MC
		 MaxColumn
		 Максимальный индекс столбца.
		 Integer, от 0 до 1048574


		 @FR


		 FixedRow
		 Индекс фиксированной строки.
		 Integer, от 0 до @MUR


		 @FC
		 FixedColumn
		 Индекс фиксированного столбца.
		 Integer, от 0 до @MUC


		 @DRN
		 DisplayRowNumbers
		 Видимость заголовка строк.
		 Boolean


		 @DCN


		 DisplayColumnNames
		 Видимость заголовка столбцов.
		 Boolean


		 @DAR
		 DisplayAccessRights
		 Отображение пиктограмм прав доступа к ячейкам.
		 Boolean


		 @DDFB
		 DisplayDarkFixedBorder
		 Отображение тени фиксированной области.
		 Boolean


		 @DFAL


		 DisplayFixedArealines
		 Отображение линий фиксации.
		 Boolean


		 @FALC
		 FixedAreaLineColor
		 Цвет линий фиксации.
		 String


		 @FB
		 FixedBehaviour
		 Стиль взаимодействия выделения с фиксированной областью.
		 Integer:


			- 0 - отключено;

			- 2 - выделяется только не фиксированная
			 часть;

			- 3 - выделяется все.


		 @DG


		 DisplayGrid
		 Видимость сетки (сетка - границы ячеек по умолчанию, не заданные
		 в стиле).
		 Boolean


		 [DefaultRow](TabSheet_JSON.htm#defaultrow)

		 Объект с настройками по умолчанию для строк.
		 { .. }


		 [DefaultColumn](TabSheet_JSON.htm#defaultcolumn)


		 Объект с настройками по умолчанию для столбцов.
		 { .. }


		 [Rows](TabSheet_JSON.htm#rows)

		 Объект, содержащий настройки строк.
		 { .. }


		 [Columns](TabSheet_JSON.htm#columns)

		 Объект, содержащий настройки столбцов.
		 { .. }


		 [CellSpans](TabSheet_JSON.htm#cellspans)


		 Объект, содержащий настройки объединенных ячеек.
		 { .. }


		 [Expanders](TabSheet_JSON.htm#expanders)

		 Объект, содержащий настройки экспандеров.
		 { .. }


		 [Objects](TabSheet_JSON.htm#objects)

		 Объект, содержащий настройки объектов.
		 { .. }


### Структура объекта DefaultRow (Structure ->
 DefaultRow)


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 @H
		 Height
		 Высота строк по умолчанию.
		 Integer, от 0


		 @V
		 Visible
		 Видимость строк по умолчанию.
		 Boolean


Пример использования:


"DefaultRow": {
  "@H" : 50
}

### Структура объекта DefaultColumn (Structure
 -> DefaultColumn)


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 @W
		 Width
		 Высота столбцов по умолчанию.
		 Integer, от 0


		 @V
		 Visible
		 Видимость столбцов по умолчанию.
		 Boolean


### Структура объекта Rows (Structure -> Rows)


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 Row

		 Массив объектов с настройками строк.
		 [ ... ]


### Структура объекта Row (Structure -> Rows -> Row)


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 @I
		 Index
		 Индекс строки.
		 Integer, от 0 до MUR


		 @H
		 Height
		 Высота строки.
		 Integer


		 @V
		 Visible
		 Видимость строки.
		 Boolean


Пример использования (При данных настройках первая строка будет иметь
 высоту 100):


"Rows": {
  "Row" : [{
      "@I" : 0,
      "@H" : 100
  }]
}

### Структура объекта Columns (Structure -> Columns)


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 Column

		 Массив объектов с настройками столбцов.
		 [ ... ]


### Структура объекта Column (Structure -> Columns -> Column)


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 @I
		 Index
		 Индекс столбца.
		 Integer, от 0 до MUC


		 @W
		 Width
		 Ширина столбца.
		 Integer


		 @V
		 Visible
		 Видимость столбца.
		 Boolean


### Структура объекта CellSpans (Structure ->
 CellSpans)


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 CellSpan

		 Массив объектов с настройками объединенных ячеек.
		 [ ... ]


### Структура объекта CellSpan (Structure -> CellSpans -> CellSpan)


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 @L
		 Left
		 Индекс столбца левой ячейки объединения.
		 Integer, от 0 до MUC


		 @T
		 Top
		 Индекс строки верхней ячейки объединения.
		 Integer, от 0 до MUR


		 @W
		 Width
		 Количество столбцов, которое будет входить в объединение с
		 ячейкой.
		 Integer


		 @H
		 Height
		 Количество строк, которое будет входить в объединение с ячейкой.
		 Integer


### Структура объекта Expanders (Structure ->
 Expanders)


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 Expander

		 Массив объектов с настройками экспандеров.
		 [ ... ]


### Структура объекта Expander (Structure -> Expanders -> Expander)


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 @L
		 Left
		 Индекс столбца левой ячейки экспандера.
		 Integer, от 0 до MUC


		 @T
		 Top
		 Индекс строки верхней ячейки экспандера.
		 Integer, от 0 до MUR


		 @W
		 Width
		 Количество столбцов, скрываемых экспандером.
		 Integer


		 @H
		 Height
		 Количество строк, скрываемых экспандером.
		 Integer


		 @IC
		 IsCollapsed
		 Определяет, свернут ли экспандер.
		 Boolean


### Структура объекта Objects (Structure -> Objects)


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 Object

		 Массив объектов с настройками объектов компонента TabSheet.
		 [ ... ]


### Структура объекта Object (Structure -> Objects -> Object)


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 @I
		 Id
		 Идентификатор объекта (только если объекты содержатся в TabObjectsImages).
		 String


		 @LC
		 LeftColumn
		 Индекс столбца, к которому привязан левый край объекта.
		 Integer, от 0 до MUC


		 @TR
		 TopRow
		 Индекс строки, к которой привязан верхний край объекта.
		 Integer, от 0 до MUR


		 @L
		 Left
		 Горизонтальный отступ до объекта в столбце @LC.
		 Integer


		 @T
		 Top
		 Вертикальный отступ до объекта в строке @TR.
		 Integer


		 @W
		 Width
		 Ширина объекта.
		 Integer


		 @CN
		 ClassName
		 Тип объекта регламентного отчета.
		 String; например: "PrxShape"


		 @H
		 Height
		 Высота объекта.
		 Integer


		 @MM
		 MovementMode
		 Способ перемещения объекта.
		 PP.Ui.TabObjectMovementMode :

0: Fixed

1: FixedSize

2: FixedHeight

3: FixedWidth

4: Free


		 @BR
		 BottomRow
		 Индекс строки, к которой привязан нижний край объекта.
		 Integer, от 0 до MUR


		 @RC
		 RightColumn
		 Индекс столбца, к которому привязан правый край объекта.
		 Integer, от 0 до MUC


		 @VH
		 ViewHeight
		 Специальные свойства для позиционирования prxShape.


		 @VW
		 ViewWidth
		 Специальные свойства для позиционирования prxShape.


		 @VL
		 ViewLeft
		 Специальные свойства для позиционирования prxShape.


		 @VT
		 ViewTop
		 Специальные свойства для позиционирования prxShape.


		 @U
		 url
		 URL объекта.
		 String


		 @T2
		 Top2
		 Вертикальный отступ до нижнего края объекта от верхнего края
		 ячейки строк @BR.
		 Integer


		 @L2
		 Left2
		 Горизонтальный отступ до правого края объекта от левого края
		 ячейки столбца @RC.
		 Integer


		 @V
		 Visible
		 Видимость объекта.
		 Boolean


## Структура объекта Cells


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 Cell

		 Массив объектов с настройками ячеек.
		 [ ... ]


### Структура объекта Cell (Cells -> Cell)


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 @L
		 Left
		 Индекс столбца ячейки.
		 Integer, от 0 до MUC


		 @T
		 Top
		 Индекс строки ячейки.
		 Integer, от 0 до MUR


		 @SI
		 StyleIndex
		 Индекс стиля ячейки из массива Styles.
		 Integer


		 CD

		 Объект с настройками данных ячейки.
		 { ... }


		 PictureData

		 Объект с настройками рисунка.
		 { ... }


		 ConditionIcon

		 Объект с настройками пиктограммы.
		 { ... }


### Структура объекта CellData (Cells -> Cell -> CellData)


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 @IE
		 IsEnabled
		 Доступность на редактирование.
		 Boolean


		 @FT
		 FormattedText
		 Форматированный текст ячейки.
		 String


		 @VT
		 Type
		 Тип данных ячейки (атрибут используется только для поддержки
		 выравнивания по значению).
		 String; "6" - выравнивание по центру, 8/2/1/0 - выравнивание
		 по левому краю


		 @Data

		 Пользовательские данные.


		 @H
		 Hint
		 Подсказка ячейки.
		 String


		 @C
		 Comment
		 Комментарий в ячейке.
		 String


		 @V
		 Value
		 Значение ячейки.
		 String


### Структура объекта PictureData (Cells -> Cell -> PictureData)


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 @N
		 NormalPicture
		 Индекс обычного рисунка.
		 Integer


		 @C
		 Cursor
		 Курсор.
		 Integer


		 @H
		 HoverPicture
		 Индекс hover рисунка.
		 Integer


		 @T
		 Tooltip
		 Подсказка картинки.
		 String


		 @EPE
		 EnablePictureEvents
		 Доступность события PictureMouseDown при щелчке по картинке.
		 Boolean


		 @HA
		 HorizontalAlignment
		 Выравнивание рисунка по горизонтали.
		 Integer, 2 - по центру, 1 - по левому краю, в остальных по
		 правому


		 @VA
		 VerticalAlignment
		 Выравнивание рисунка по вертикали.
		 Integer, 2 - по центру, 1 - по верхнему краю, в остальных по
		 нижнему


### Структура объекта ConditionIcon (Cells -> Cell -> ConditionIcon)


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 @X

		 Индекс пиктограммы в битмапе ресурсов.
		 Integer; Соответствует индексу из массива ConditionsIcons.TabIcons.TabImage


		 @HA
		 HorizontalAlignment
		 Выравнивание по горизонтали.
		 Integer; 0 - слева, 1 - справа


		 @Y

		 Тип пиктограммы.
		 Integer; соответствует значению из ConditionsIcons.TabIcons.I


## Структура объекта Styles


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 Style

		 Массив объектов с настройками стилей.
		 [ ... ]


### Структура объекта Style (Styles -> Style)


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 @B
		 Binding
		 Привязка ячейки.
		 String, JSON строка. JSON по формату метода PP.create; Например:
		 {"PPType": "NumberEdit", "IsNullable":
		 true}


		 Text

		 Объект с настройками текста.
		 { ... }


		 NumberFormat

		 Объект с настройками числовых значений.
		 { ... }


		 Fill

		 Объект с настройками заливки.
		 { ... }


		 Font

		 Объект с настройками шрифта.
		 { ... }


		 Borders

		 Объект с настройками границ.
		 { ... }


		 Hyperlink

		 Объект с настройками гиперссылок.
		 { ... }


### Структура объекта Text (Styles -> Style -> Text)


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 @HA
		 HorizontalAlignment
		 Выравнивание текста по горизонтали.
		 Integer; 1 - left, 2 - center, 3 - right, 4 - justify, 0 -
		 по значению


		 @VA
		 VerticalAlignment
		 Выравнивание текста по вертикали.
		 Integer; 0 - top, 1 - middle, 2 - bottom


		 @WW
		 WordWrap
		 Перенос текста.
		 Integer; 0 - выключен, 1 - включен


		 @M
		 Margins
		 Отступы ячейки.
		 String, строка вида "top right bottom left";

		Например: "4 4 4 4"


### Структура объекта NumberFormat (Styles -> Style -> NumberFormat)


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 @F
		 UserFormat
		 Пользовательский формат.
		 String; Например: "# ##0,00"


### Структура объекта Fill (Styles -> Style -> Fill)


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 @C
		 Color
		 Цвет заливки.
		 String; Например: "#E6E9F5"


		 @A
		 Angle
		 Угол градиентной заливки.
		 Integer


		 @SC
		 SecondColor
		 Второй цвет для градиентной заливки.
		 String; Например: "#E6E9F5"


### Структура объекта Font (Styles -> Style -> Font)


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 @F
		 Family
		 Шрифт.
		 String


		 @S
		 Size
		 Размер шрифта.
		 Integer


		 @C
		 Color
		 Цвет шрифта.
		 String


		 @I
		 Italic
		 Курсивный.
		 Boolean


		 @SO
		 Strikeout
		 Зачеркнутый.
		 Boolean


		 @B
		 Bold
		 Жирный.
		 Boolean


		 @U
		 Underline
		 Подчеркнутый.
		 Boolean


### Структура объекта Borders (Styles -> Style -> Borders)


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 Border

		 Массив объектов с настройками границ.
		 [ ... ]


### Структура объекта Border (Styles -> Style -> Borders -> Border)


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 @I
		 Index
		 Индекс границы.
		 Integer; 2 - top, 3 - left, 4 - bottom, 5 - right


		 @S
		 Style
		 Стиль границы.
		 Integer; 1 - Dash, 2 - DashDot, 3 - DashDotDot, 4 - Dot, 5
		 - Double, 6 - SlantDashDot, 7 - LineStyleNone


		 @C
		 Color
		 Цвет границы.
		 String


		 @W
		 Weight
		 Толщина границы.
		 Integer


### Структура объекта Hyperlink (Styles -> Style -> Hyperlink)


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 @T
		 Text
		 Текст гиперссылки.
		 String


		 @A
		 Action
		 Действие гиперссылки.
		 String


		 @E
		 Enable
		 Доступность действия гиперссылки.
		 Boolean


		 @HT
		 HyperLinkTarget
		 Способ открытия ссылки/файла.
		 PP.Ui.TabHyperlinkTarget


		 @AT
		 ActionType
		 Тип действия гиперссылки.
		 PP.Ui.TabSheetHyperlinkAction


		 @C
		 Color
		 Цвет гиперссылки.
		 String


		 @U
		 Underline
		 Подчеркнутый.
		 Boolean


## Структура объекта Images


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 TabImages

		 Объект с настройками изображений.
		 { .. }


		 ConditionIcons

		 Объект с настройками пиктограмм.
		 { .. }


### Структура объекта TabImages (Images -> TabImages)


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 TabImage

		 Массив объектов с настройками изображений.
		 [ ... ]


### Структура объекта TabImage (Images -> TabImages -> TabImage)


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 @CT
		 ContentType
		 Тип изображения в base64.
		 String, ContentType; Например "png"


		 @W
		 Width
		 Ширина изображения.
		 Integer


		 @H
		 Height
		 Высота изображения.
		 Integer


		 @I
		 Id
		 Числовой идентификатор изображения.
		 Integer


		 @$

		 Base64 изображения.
		 String


### Структура объекта ConditionIcons (Images -> ConditionIcons)


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 TabIcons

		 Массив объектов с настройками пиктограмм.
		 [ ... ]


### Структура объекта TabIcons (Images -> ConditionIcons -> TabIcons)


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 @I
		 Id
		 Числовой идентификатор набора пиктограмм.
		 Integer


		 TabImage

		 Массив объектов с настройками пиктограмм.
		 [ ... ]


### Структура объекта TabImage (Images -> ConditionIcons -> TabIcons
 -> TabImage)


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 @CT
		 ContentType
		 Тип изображения в base64.
		 String, ContentType; Например "png"


		 @W
		 Width
		 Ширина изображения.
		 Integer


		 @H
		 Height
		 Высота изображения.
		 Integer


		 @$

		 Base64 изображения.
		 String


## Структура объекта TabObjectsImages


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 TabObjectImage


		 { .. }


### Структура объекта TabObjectsImage


		 Ключ / Объект
		 Расшифровка
		 Краткое описание
		 Допустимое значение


		 @I
		 Id
		 Идентификатор объекта, который соответствует Structure.Objects.Object.I
		 String


		 @asImage

		 Base64 объекта.
		 String


См.
 также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
