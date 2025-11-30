# MsExpressionEdit: Компонент

MsExpressionEdit: Компонент
-


# MsExpressionEdit


## Иерархия наследования


           [IComponent](ModForms.chm::/Interface/IComponent/IComponent.htm)


           [IControl](ModForms.chm::/Interface/IControl/IControl.htm)


           [ICustomEdit](ModForms.chm::/Interface/ICustomEdit/ICustomEdit.htm)


           [ITermEdit](ModForms.chm::/Interface/ITermEdit/ITermEdit.htm)


           [IMsExpressionEdit](KeMs.chm::/Interface/IMsExpressionEdit/IMsExpressionEdit.htm)


           [MsExpressionEdit](KeMs.chm::/Class/MsExpressionEdit/MsExpressionEdit.htm)


## Описание


Компонент MsExpressionEdit представляет
 собой аналог компонента [MetaAttributesEdit](MetaAttributesEdit.htm),
 ориентированный на редактирование выражений моделей, которые создаются
 в контейнере моделирования базы данных временных рядов.


## Работа с компонентом


Для работы компонента:


	- В свойстве [Rubricator](KeMs.chm::/Interface/IMsExpressionEdit/IMsExpressionEdit.Rubricator.htm)
	 укажите базу данных временных рядов, с объектами которой будет производиться
	 дальнейшая работа.


	- В свойстве [SelectionSet](KeMs.chm::/Interface/IMsExpressionEdit/IMsExpressionEdit.SelectionSet.htm)
	 укажите отметку атрибутов, либо используя метод [AddAttribute](KeMs.chm::/Interface/IMsExpressionEdit/IMsExpressionEdit.AddAttribute.htm)
	 добавить атрибуты, значения которых будут использоваться для составления
	 наименований рядов.


Для редактирования выражения модели, созданной в контейнере моделирования:


	- В свойстве [FormulaTransform](KeMs.chm::/Interface/IMsExpressionEdit/IMsExpressionEdit.FormulaTransform.htm)
	 укажите параметры модели, для которой необходимо редактировать выражение.


	- В свойстве [FormulaTermList](KeMs.chm::/Interface/IMsExpressionEdit/IMsExpressionEdit.FormulaTermList.htm)
	 укажите коллекцию операндов, которые будут использоваться для составления
	 выражения модели. Данную коллекцию можно получить в параметрах модели.


	- Свойство [Expression](KeMs.chm::/Interface/IMsExpressionEdit/IMsExpressionEdit.Expression.htm)
	 свяжите с выражением модели.


После этого в списке подстановок IntelliSense будут доступны значения
 атрибутов базы данных временных рядов, операнды моделей, а также различные
 функции. Для вызова IntelliSense используется сочетание клавиш
 CTRL+ПРОБЕЛ. Также список появляется автоматически при наборе
 текста в компоненте.


Свойства [HeavyDelimiters](KeMs.chm::/Interface/IMsExpressionEdit/IMsExpressionEdit.HeavyDelimiters.htm),
 [LightDelimiters](KeMs.chm::/Interface/IMsExpressionEdit/IMsExpressionEdit.LightDelimiters.htm),
 [MaxTermWordCount](KeMs.chm::/Interface/IMsExpressionEdit/IMsExpressionEdit.MaxTermWordCount.htm)
 позволяют указать дополнительные настройки, которые будут учитываться
 при формировании выражений.


## Свойства компонента MsExpressionEdit


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Align](ModForms.chm::/Interface/IControl/IControl.Align.htm)


		 Свойство Align определяет,
		 как поведет себя компонент при изменении размеров содержащего
		 его родительского компонента.


		 ![](../../Property_Image.gif)
		 [AllowDrag](ModForms.chm::/Interface/IControl/IControl.AllowDrag.htm)


		 Свойство AllowDrag
		 определяет возможность взять у компонента перетаскиваемый объект.


		 ![](../../Property_Image.gif)
		 [AllowDrop](ModForms.chm::/Interface/IControl/IControl.AllowDrop.htm)


		 Свойство AllowDrop
		 определяет, будет ли возможность у компонента принять перетаскиваемый
		 объект.


		 ![](../../Property_Image.gif)
		 [Analyzer](KeExpress.chm::/Interface/IValidationLegendBox/IValidationLegendBox.Analyzer.htm)


		 Свойство Analyzer определяет
		 источник данных для компонента.


		 ![](../../Property_Image.gif)
		 [Anchors](ModForms.chm::/Interface/IControl/IControl.Anchors.htm)


		 Свойство Anchors возвращает
		 настройки, определяющие в процентном соотношении изменение размеров
		 текущего компонента при изменении размеров родительского компонента.


		 ![](../../Property_Image.gif)
		 [AutoSelect](ModForms.chm::/Interface/ICustomEdit/ICustomEdit.AutoSelect.htm)


		 Свойство AutoSelect
		 определяет, будет ли выделяться текст компонента, при получении
		 компонентом фокуса.


		 ![](../../Property_Image.gif)
		 [BorderStyle](ModForms.chm::/Interface/ICustomEdit/ICustomEdit.BorderStyle.htm)


		 Свойство BorderStyle
		 определяет стиль границы компонента.


		 ![](../../Property_Image.gif)
		 [Brush](ModForms.chm::/Interface/IControl/IControl.Brush.htm)


		 Свойство Brush определяет
		 кисть, используемую для заливки области компонента.


		 ![](../../Property_Image.gif)
		 [CanUndo](ModForms.chm::/Interface/ICustomEdit/ICustomEdit.CanUndo.htm)


		 Свойство CanUndo возвращает
		 True, если существует
		 возможность отменить изменения текста в компоненте.


		 ![](../../Property_Image.gif)
		 [CharacterCasing](ModForms.chm::/Interface/ICustomEdit/ICustomEdit.CharacterCasing.htm)


		 Свойство CharacterCasing
		 определяет регистр вводимых символов компонента.


		 ![](../../Property_Image.gif)
		 [ClientHeight](ModForms.chm::/Interface/IControl/IControl.ClientHeight.htm)


		 Свойство ClientHeight
		 используется для получения или задания высоты клиентской области
		 компонента.


		 ![](../../Property_Image.gif)
		 [ClientWidth](ModForms.chm::/Interface/IControl/IControl.ClientWidth.htm)


		 Свойство ClientWidth
		 используется для получения или задания ширины клиентской области
		 компонента.


		 ![](../../Property_Image.gif)
		 [Color](ModForms.chm::/Interface/IControl/IControl.Color.htm)


		 Свойство Color определяет
		 цвет фона компонента.


		 ![](../../Property_Image.gif)
		 [ComponentCount](ModForms.chm::/Interface/IComponent/IComponent.ComponentCount.htm)


		 Свойство ComponentCount
		 возвращает количество дочерних компонентов.


		 ![](../../Property_Image.gif)
		 [Components](ModForms.chm::/Interface/IComponent/IComponent.Components.htm)


		 Свойство Components
		 возвращает дочерний компонент.


		 ![](../../Property_Image.gif)
		 [Cursor](ModForms.chm::/Interface/IControl/IControl.Cursor.htm)


		 Свойство Cursor определяет
		 вид курсора над компонентом.


		 ![](../../Property_Image.gif)
		 [Data](ModForms.chm::/Interface/IComponent/IComponent.Data.htm)


		 Свойство Data предназначено
		 для хранения любых пользовательских данных.


		 ![](../../Property_Image.gif)
		 [Enabled](ModForms.chm::/Interface/IControl/IControl.Enabled.htm)


		 Свойство Enabled определяет
		 доступность компонента для пользователя.


		 ![](../../Property_Image.gif)
		 [EnableHyperlinks](ModForms.chm::/Interface/ITermEdit/ITermEdit.EnableHyperlinks.htm)


		 Свойство EnableHyperlinks
		 определяет возможность отображения терма в виде гиперссылки.


		 ![](../../Property_Image.gif)
		 [Expression](KeMs.chm::/Interface/IMsExpressionEdit/IMsExpressionEdit.Expression.htm)


		 Свойство Expression
		 определяет выражение, расположенное в компоненте.


		 ![](../../Property_Image.gif)
		 [Focused](ModForms.chm::/Interface/IControl/IControl.Focused.htm)


		 Свойство Focused возвращает
		 True, если фокус установлен
		 на данном компоненте.


		 ![](../../Property_Image.gif)
		 [Font](ModForms.chm::/Interface/IControl/IControl.Font.htm)


		 Свойство Font определяет
		 множество характеристик, описывающих шрифт, используемый при отображении
		 текста.


		 ![](../../Property_Image.gif)
		 [Formula](ModForms.chm::/Interface/ITermEdit/ITermEdit.Formula.htm)


		 Свойство Formula определяет
		 формулу терма.


		 ![](../../Property_Image.gif)
		 [FormulaTermList](KeMs.chm::/Interface/IMsExpressionEdit/IMsExpressionEdit.FormulaTermList.htm)


		 Свойство FormulaTermList
		 определяет коллекцию выражений, доступных в компоненте.


		 ![](../../Property_Image.gif)
		 [FormulaTransform](KeMs.chm::/Interface/IMsExpressionEdit/IMsExpressionEdit.FormulaTransform.htm)


		 Свойство FormulaTransform
		 определяет параметры модели, на которую настроен компонент.


		 ![](../../Property_Image.gif)
		 [HeavyDelimiters](KeMs.chm::/Interface/IMsExpressionEdit/IMsExpressionEdit.HeavyDelimiters.htm)


		 Свойство HeavyDelimiters
		 определяет разделитель выражений.


		 ![](../../Property_Image.gif)
		 [Height](ModForms.chm::/Interface/IControl/IControl.Height.htm)


		 Свойство Height определяет
		 высоту компонента.


		 ![](../../Property_Image.gif)
		 [HelpContext](ModForms.chm::/Interface/IControl/IControl.HelpContext.htm)


		 Свойство HelpContext
		 определяет уникальный индекс раздела контекстно-зависимой справки
		 для данного компонента.


		 ![](../../Property_Image.gif)
		 [HideSelection](ModForms.chm::/Interface/ICustomEdit/ICustomEdit.HideSelection.htm)


		 Свойство HideSelection
		 определяет, будет ли выделенный текст компонента оставаться таковым,
		 при передаче фокуса другому компоненту.


		 ![](../../Property_Image.gif)
		 [Hint](ModForms.chm::/Interface/IControl/IControl.Hint.htm)


		 Свойство Hint определяет
		 текст подсказки для компонента.


		 ![](../../Property_Image.gif)
		 [Hyperlink](ModForms.chm::/Interface/ITermEdit/ITermEdit.Hyperlink.htm)


		 Свойство Hyperlink
		 определяет признак отображения указанного терма в виде гиперссылки.


		 ![](../../Property_Image.gif)
		 [Left](ModForms.chm::/Interface/IControl/IControl.Left.htm)


		 Свойство Left определяет
		 координату левого края компонента.


		 ![](../../Property_Image.gif)
		 [LightDelimiters](KeMs.chm::/Interface/IMsExpressionEdit/IMsExpressionEdit.LightDelimiters.htm)


		 Свойство LightDelimiters
		 определяет разделитель слов в одном выражении.


		 ![](../../Property_Image.gif)
		 [MaxLength](ModForms.chm::/Interface/ICustomEdit/ICustomEdit.MaxLength.htm)


		 Свойство MaxLength
		 определяет максимальную длину вводимого текста.


		 ![](../../Property_Image.gif)
		 [MaxTermWordCount](KeMs.chm::/Interface/IMsExpressionEdit/IMsExpressionEdit.MaxTermWordCount.htm)


		 Свойство MaxTermWordCount
		 определяет максимально возможное количество слов в выражении.


		 ![](../../Property_Image.gif)
		 [Modified](ModForms.chm::/Interface/ICustomEdit/ICustomEdit.Modified.htm)


		 Свойство Modified возвращает
		 True, если производилось
		 изменение текста компонента.


		 ![](../../Property_Image.gif)
		 [Name](ModForms.chm::/Interface/IComponent/IComponent.Name.htm)


		 Свойство Name определяет
		 наименование компонента.


		 ![](../../Property_Image.gif)
		 [Parent](ModForms.chm::/Interface/IControl/IControl.Parent.htm)
		 Свойство Parent определяет
		 родительский компонент.


		 ![](../../Property_Image.gif)
		 [ParentColor](ModForms.chm::/Interface/IControl/IControl.ParentColor.htm)


		 Свойство ParentColor
		 определяет, будет ли для компонента заимствован цвет родительского
		 компонента.


		 ![](../../Property_Image.gif)
		 [ParentFont](ModForms.chm::/Interface/IControl/IControl.ParentFont.htm)


		 Свойство ParentFont
		 определяет, будет ли для компонента использоваться шрифт родительского
		 компонента.


		 ![](../../Property_Image.gif)
		 [ParentShowHint](ModForms.chm::/Interface/IControl/IControl.ParentShowHint.htm)


		 Свойство ParentShowHint
		 определяет условие отображения всплывающей подсказки.


		 ![](../../Property_Image.gif)
		 [PopupMenu](ModForms.chm::/Interface/IControl/IControl.PopupMenu.htm)


		 Свойство PopupMenu
		 определяет контекстное меню, которое будет появляться по щелчку
		 дополнительной кнопки мыши на компоненте.


		 ![](../../Property_Image.gif)
		 [ReadOnly](ModForms.chm::/Interface/ICustomEdit/ICustomEdit.ReadOnly.htm)


		 Свойство ReadOnly определяет,
		 может ли пользователь изменять текст компонента.


		 ![](../../Property_Image.gif)
		 [Rubricator](KeMs.chm::/Interface/IMsExpressionEdit/IMsExpressionEdit.Rubricator.htm)


		 Свойство Rubricator
		 определяет базу данных временных рядов, с атрибутами которой можно
		 работать в компоненте.


		 ![](../../Property_Image.gif)
		 [Scrolls](ModForms.chm::/Interface/IControl/IControl.Scrolls.htm)


		 Свойство Scrolls возвращает
		 параметры полос прокрутки компонента.


		 ![](../../Property_Image.gif)
		 [SelectionSet](KeMs.chm::/Interface/IMsExpressionEdit/IMsExpressionEdit.SelectionSet.htm)


		 Свойство SelectionSet
		 определяет отметку атрибутов базы данных временных рядов.


		 ![](../../Property_Image.gif)
		 [SelLength](ModForms.chm::/Interface/ICustomEdit/ICustomEdit.SelLength.htm)


		 Свойство SelLength
		 определяет количество символов, выделенных в тексте компонента.


		 ![](../../Property_Image.gif)
		 [SelStart](ModForms.chm::/Interface/ICustomEdit/ICustomEdit.SelStart.htm)


		 Свойство SelStart определяет
		 позицию, в которой расположен курсор и начинается выделение текста
		 в компоненте.


		 ![](../../Property_Image.gif)
		 [SelText](ModForms.chm::/Interface/ICustomEdit/ICustomEdit.SelText.htm)


		 Свойство SelText определяет
		 текст, выделенный в компоненте.


		 ![](../../Property_Image.gif)
		 [ShowHint](ModForms.chm::/Interface/IControl/IControl.ShowHint.htm)


		 Свойство ShowHint включает
		 и выключает показ всплывающего окна подсказки для компонента.


		 ![](../../Property_Image.gif)
		 [TabOrder](ModForms.chm::/Interface/IControl/IControl.TabOrder.htm)


		 Свойство TabOrder определяет
		 позицию компонента в последовательности табуляции.


		 ![](../../Property_Image.gif)
		 [TabStop](ModForms.chm::/Interface/IControl/IControl.TabStop.htm)


		 Свойство TabStop определяет
		 признак необходимости компоненту получать фокус при нажатии кнопки
		 «Tab».


		 ![](../../Property_Image.gif)
		 [Tag](ModForms.chm::/Interface/IComponent/IComponent.Tag.htm)
		 Свойство Tag не используется
		 компилятором. Пользователь может изменить значение свойства Tag и использовать его по своему
		 усмотрению.


		 ![](../../Property_Image.gif)
		 [Terms](ModForms.chm::/Interface/ITermEdit/ITermEdit.Terms.htm)


		 Свойство Terms возвращает
		 коллекцию термов.


		 ![](../../Property_Image.gif)
		 [Text](ModForms.chm::/Interface/IControl/IControl.Text.htm)


		 Свойство Text определяет
		 строку, идентифицирующую компонент для пользователя.


		 ![](../../Property_Image.gif)
		 [Top](ModForms.chm::/Interface/IControl/IControl.Top.htm)


		 Свойство Top определяет
		 координату верхнего края компонента.


		 ![](../../Property_Image.gif)
		 [UseFullVariableNames](KeMs.chm::/Interface/IMsExpressionEdit/IMsExpressionEdit.UseFullVariableNames.htm)


		 Свойство UseFullVariableNames
		 определяет, использовать ли полные наименования операндов.


		 ![](../../Property_Image.gif)
		 [Visible](ModForms.chm::/Interface/IControl/IControl.Visible.htm)


		 Свойство Visible определяет
		 видимость компонента во время выполнения.


		 ![](../../Property_Image.gif)
		 [WantReturns](ModForms.chm::/Interface/ITermEdit/ITermEdit.WantReturns.htm)


		 Свойство WantReturns
		 определяет возможность вставки в редактируемый текст символа возврата
		 каретки.


		 ![](../../Property_Image.gif)
		 [WantTabs](ModForms.chm::/Interface/ITermEdit/ITermEdit.WantTabs.htm)


		 Свойство WantTabs определяет
		 возможность вставки в редактируемый текст символа табуляции.


		 ![](../../Property_Image.gif)
		 [Width](ModForms.chm::/Interface/IControl/IControl.Width.htm)


		 Свойство Width определяет
		 ширину компонента.


		 ![](../../Property_Image.gif)
		 [WordWrap](ModForms.chm::/Interface/ITermEdit/ITermEdit.WordWrap.htm)


		 Свойство WordWrap определяет,
		 будут ли переноситься слова длинной надписи, превышающие длину
		 компонента, на новую строку.


## Методы компонента MsExpressionEdit


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddStub](KeMs.chm::/Interface/IMsExpressionEdit/IMsExpressionEdit.AddAttribute.htm)


		 Метод AddStub добавляет
		 куб в качестве источника данных MsExpressionEdit.


		 ![](../../Sub_Image.gif)
		 [AddAttribute](KeMs.chm::/Interface/IMsExpressionEdit/IMsExpressionEdit.AddAttribute.htm)


		 Метод AddAttribute
		 добавляет атрибут в компонент.


		 ![](../../Sub_Image.gif)
		 [BeginUpdate](ModForms.chm::/Interface/ITermEdit/ITermEdit.BeginUpdate.htm)


		 Метод BeginUpdate отключает
		 набор внутренних механизмов для ускорения вставки термов в компонент.


		 ![](../../Sub_Image.gif)
		 [Clear](ModForms.chm::/Interface/ICustomEdit/ICustomEdit.Clear.htm)


		 Метод Clear удаляет
		 весь текст, содержащийся в компоненте.


		 ![](../../Sub_Image.gif)
		 [ClearAttributes](KeMs.chm::/Interface/IMsExpressionEdit/IMsExpressionEdit.ClearAttributes.htm)


		 Метод ClearAttributes
		 удаляет все атрибуты из компонента.


		 ![](../../Sub_Image.gif)
		 [ClearSelection](ModForms.chm::/Interface/ICustomEdit/ICustomEdit.ClearSelection.htm)


		 Метод ClearSelection
		 удаляет весь текст, который был выделен в компоненте.


		 ![](../../Sub_Image.gif)
		 [ClearUndo](ModForms.chm::/Interface/ICustomEdit/ICustomEdit.ClearUndo.htm)


		 Метод ClearUndo используется
		 для фиксации изменений свойства Text.


		 ![](../../Sub_Image.gif)
		 [ClientToScreen](ModForms.chm::/Interface/IControl/IControl.ClientToScreen.htm)


		 Метод ClientToScreen
		 преобразовывает координаты точки, указанные относительно системы
		 координат компонента, в экранные координаты.


		 ![](../../Sub_Image.gif)
		 [CopyToClipboard](ModForms.chm::/Interface/ICustomEdit/ICustomEdit.CopyToClipboard.htm)


		 Метод CopyToClipboard
		 осуществляет копирование выделенных данных в буфер обмена.


		 ![](../../Sub_Image.gif)
		 [CutToClipboard](ModForms.chm::/Interface/ICustomEdit/ICustomEdit.CutToClipboard.htm)


		 Метод CutToClipboard
		 осуществляет вырезание выделенных данных и помещает их в буфер
		 обмена.


		 ![](../../Sub_Image.gif)
		 [DoDragDrop](ModForms.chm::/Interface/IControl/IControl.DoDragDrop.htm)


		 Метод DoDragDrop позволяет
		 начать операцию перетаскивания.


		 ![](../../Sub_Image.gif)
		 [EndUpdate](ModForms.chm::/Interface/ITermEdit/ITermEdit.EndUpdate.htm)


		 Метод EndUpdate восстанавливает
		 работоспособность внутренних механизмов компонента, которые были
		 отключены для ускорения вставки термов в компонент.


		 ![](../../Sub_Image.gif)
		 [GetAttributeCount](KeMs.chm::/Interface/IMsExpressionEdit/IMsExpressionEdit.GetAttributeCount.htm)


		 Метод GetAttributeCount
		 возвращает число атрибутов в компоненте.


		 ![](../../Sub_Image.gif)
		 [GetImage](ModForms.chm::/Interface/IControl/IControl.GetImage.htm)


		 Метод GetImage возвращает
		 изображение компонента со всеми дочерними компонентами.


		 ![](../../Sub_Image.gif)
		 [PasteFromClipboard](ModForms.chm::/Interface/ICustomEdit/ICustomEdit.PasteFromClipboard.htm)


		 Метод PasteFormClipboard
		 осуществляет вставку данных из буфера обмена.


		 ![](../../Sub_Image.gif)
		 [PutCustom](ModForms.chm::/Interface/ITermEdit/ITermEdit.PutCustom.htm)


		 Метод PutCustom осуществляет
		 размещение пользовательского терма в указанную позицию.


		 ![](../../Sub_Image.gif)
		 [PutLiteral](ModForms.chm::/Interface/ITermEdit/ITermEdit.PutLiteral.htm)


		 Метод PutLiteral осуществляет
		 размещение литерального терма в указанную позицию.


		 ![](../../Sub_Image.gif)
		 [PutTerm](ModForms.chm::/Interface/ITermEdit/ITermEdit.PutTerm.htm)


		 Метод PutTerm осуществляет
		 размещение терма в указанную позицию.


		 ![](../../Sub_Image.gif)
		 [RemoveAttribute](KeMs.chm::/Interface/IMsExpressionEdit/IMsExpressionEdit.RemoveAttribute.htm)


		 Метод RemoveAttribute
		 удаляет указанный атрибут из компонента.


		 ![](../../Sub_Image.gif)
		 [Reparse](ModForms.chm::/Interface/ITermEdit/ITermEdit.Reparse.htm)


		 Метод Reparse осуществляет
		 преобразование текста редактора и перераспределение термов в компоненте.


		 ![](../../Sub_Image.gif)
		 [ScreenToClient](ModForms.chm::/Interface/IControl/IControl.ScreenToClient.htm)


		 Метод ScreenToClient
		 преобразовывает экранные координаты точки в координаты, указываемые
		 относительно системы координат компонента.


		 ![](../../Sub_Image.gif)
		 [SelectAll](ModForms.chm::/Interface/ICustomEdit/ICustomEdit.SelectAll.htm)


		 Метод SelectAll осуществляет
		 выделение текста компонента.


		 ![](../../Sub_Image.gif)
		 [SetFocus](ModForms.chm::/Interface/IControl/IControl.SetFocus.htm)


		 Метод SetFocus устанавливает
		 фокус на данный компонент.


		 ![](../../Sub_Image.gif)
		 [Undo](ModForms.chm::/Interface/ICustomEdit/ICustomEdit.Undo.htm)


		 Метод Undo осуществляет
		 отмену последнего изменения текста в компоненте.


## События компонента MsExpressionEdit


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [OnBeginDrag](ModForms.chm::/Interface/IControl/IControl.OnBeginDrag.htm)


		 Событие OnBeginDrag
		 для компонента наступает, когда пользователь начинает перетаскивать
		 объект от компонента.


		 ![](../../Event_Image.gif)
		 [OnChange](ModForms.chm::/Interface/ICustomEdit/ICustomEdit.OnChange.htm)


		 Событие OnChange наступает
		 после изменений свойства Text
		 компонента редактирования.


		 ![](../../Event_Image.gif)
		 [OnClick](ModForms.chm::/Interface/IControl/IControl.OnClick.htm)


		 Событие OnClick наступает,
		 если пользователь щёлкнул в области компонента.


		 ![](../../Event_Image.gif)
		 [OnDblClick](ModForms.chm::/Interface/IControl/IControl.OnDblClick.htm)


		 Событие OnDblClick
		 наступает, если пользователь дважды щёлкнул в области компонента.


		 ![](../../Event_Image.gif)
		 [OnDragDrop](ModForms.chm::/Interface/IControl/IControl.OnDragDrop.htm)


		 Событие OnDragDrop
		 для компонента наступает, когда пользователь отпускает над ним
		 перетаскиваемый объект.


		 ![](../../Event_Image.gif)
		 [OnDragEnter](ModForms.chm::/Interface/IControl/IControl.OnDragEnter.htm)


		 Событие OnDragEnter
		 наступает, когда перетаскиваемый объект входит в границы данного
		 компонента.


		 ![](../../Event_Image.gif)
		 [OnDragLeave](ModForms.chm::/Interface/IControl/IControl.OnDragLeave.htm)


		 Событие OnDragLeave
		 наступает, когда перетаскиваемый объект выходит за границы данного
		 компонента.


		 ![](../../Event_Image.gif)
		 [OnDragOver](ModForms.chm::/Interface/IControl/IControl.OnDragOver.htm)


		 Событие OnDragOver
		 для компонента наступает, когда пользователь протаскивает над
		 ним перетаскиваемый объект.


		 ![](../../Event_Image.gif)
		 [OnEnter](ModForms.chm::/Interface/IControl/IControl.OnEnter.htm)


		 Событие OnEnter наступает
		 в момент получения фокуса компонентом.


		 ![](../../Event_Image.gif)
		 [OnExit](ModForms.chm::/Interface/IControl/IControl.OnExit.htm)


		 Событие OnExit наступает
		 в момент потери фокуса компонентом.


		 ![](../../Event_Image.gif)
		 [OnHScroll](ModForms.chm::/Interface/IControl/IControl.OnHScroll.htm)


		 Событие OnHScroll наступает
		 при изменении положения ползунка горизонтальной полосы прокрутки.


		 ![](../../Event_Image.gif)
		 [OnHyperlink](ModForms.chm::/Class/TermEdit/TermEdit.OnHyperlink.htm)


		 Событие OnHyperlink
		 наступает при щелчке по термовой гиперссылке.


		 ![](../../Event_Image.gif)
		 [OnKeyDown](ModForms.chm::/Interface/IControl/IControl.OnKeyDown.htm)


		 Событие OnKeyDown наступает,
		 если компонент находится в фокусе и производится нажатие на клавиатуру.


		 ![](../../Event_Image.gif)
		 [OnKeyPress](ModForms.chm::/Interface/IControl/IControl.OnKeyPress.htm)


		 Событие OnKeyPress
		 наступает, если компонент находится в фокусе, при нажатии пользователем
		 символьной клавиши.


		 ![](../../Event_Image.gif)
		 [OnKeyUp](ModForms.chm::/Interface/IControl/IControl.OnKeyUp.htm)


		 Событие OnKeyUp наступает,
		 если компонент находится в фокусе, при отпускании пользователем
		 любой, ранее нажатой клавиши.


		 ![](../../Event_Image.gif)
		 [OnMouseDown](ModForms.chm::/Interface/IControl/IControl.OnMouseDown.htm)


		 Событие OnMouseDown
		 наступает, если компонент находится в фокусе и на компоненте произведено
		 нажатие любой из кнопок мыши.


		 ![](../../Event_Image.gif)
		 [OnMouseEnter](ModForms.chm::/Interface/IControl/IControl.OnMouseEnter.htm)


		 Событие OnMouseEnter
		 наступает в момент входа курсора мыши в область компонента.


		 ![](../../Event_Image.gif)
		 [OnMouseHover](ModForms.chm::/Interface/IControl/IControl.OnMouseHover.htm)


		 Событие OnMouseHover
		 наступает при задержке курсора мыши в области компонента.


		 ![](../../Event_Image.gif)
		 [OnMouseLeave](ModForms.chm::/Interface/IControl/IControl.OnMouseLeave.htm)


		 Событие OnMouseLeave
		 наступает в момент выхода курсора мыши за пределы области компонента.


		 ![](../../Event_Image.gif)
		 [OnMouseMove](ModForms.chm::/Interface/IControl/IControl.OnMouseMove.htm)


		 Событие OnMouseMove
		 наступает при перемещении пользователем курсора мыши над компонентом.


		 ![](../../Event_Image.gif)
		 [OnMouseUp](ModForms.chm::/Interface/IControl/IControl.OnMouseUp.htm)


		 Событие OnMouseUp наступает,
		 если компонент находится в фокусе и на компоненте, была отпущена
		 любая из ранее нажатых кнопок мыши.


		 ![](../../Event_Image.gif)
		 [OnMouseWheel](ModForms.chm::/Interface/IControl/IControl.OnMouseWheel.htm)


		 Событие OnMouseWheel
		 наступает, если компонент находится в фокусе при вращении колеса
		 мыши.


		 ![](../../Event_Image.gif)
		 [OnParseTerm](ModForms.chm::/Class/TermEdit/TermEdit.OnParseTerm.htm)


		 Событие OnParseTerm
		 наступает во время преобразования текста редактора в термы (выражения)
		 и знаки операции.


		 ![](../../Event_Image.gif)
		 [OnUpdateFormula](KeMs.chm::/Class/MsExpressionEdit/MsExpressionEdit.OnUpdateFormula.htm)


		 Событие OnUpdateFormula
		 наступает при преобразовании внешнего представления выражения
		 во внутреннее.


		 ![](../../Event_Image.gif)
		 [OnUpdateText](KeMs.chm::/Class/MsExpressionEdit/MsExpressionEdit.OnUpdateText.htm)


		 Событие OnUpdateText
		 наступает при преобразовании внутреннего представления
		 выражения во внешнее.


		 ![](../../Event_Image.gif)
		 [OnVScroll](ModForms.chm::/Interface/IControl/IControl.OnVScroll.htm)


		 Событие OnVScroll наступает
		 при изменении положения ползунка вертикальной полосы прокрутки.


См. также:


[Компоненты
 доступа к данным](03_components_of_the_access_to_data.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
