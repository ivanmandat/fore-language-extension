# GetExpanderInfo: Операция

GetExpanderInfo: Операция
-


**


# GetExpanderInfo


## Синтаксис


GetExpanderInfoResult GetExpanderInfo()


## Описание


Операция GetExpanderInfo получает
 список элементов кода, содержимое которых может быть свёрнуто/развёрнуто
 в окне макроса.


## Комментарии


Операция не имеет входных параметров, результатом операции будет список
 доступных элементов. Для каждого элемента будут доступны начальное и конечное
 ключевые слова, код между которыми скрывается при сворачивании. Также
 будет доступен текст, который отображается в окне макроса для свёрнутого
 элемента кода.


## Пример


Ниже приведён пример получения списка элементов кода, содержимое которых
 может быть свёрнуто/развёрнуто в окне макроса.


	 SOAP JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
  <GetExpanderInfo xmlns="**http://www.fsight.ru/PP.SOM.Som**" />
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetExpanderInfoResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<items xmlns="****">
[![](../../minus.gif)](../../#)<Item>
  <startBlockText>Interface</startBlockText>  <endBlockText>End Interface</endBlockText>  <placeholderText>Interface</placeholderText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <startBlockText>Class</startBlockText>  <endBlockText>End Class</endBlockText>  <placeholderText>Class</placeholderText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <startBlockText>Namespace</startBlockText>  <endBlockText>End Namespace</endBlockText>  <placeholderText>Namespace</placeholderText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <startBlockText>Sub</startBlockText>  <endBlockText>End Sub</endBlockText>  <placeholderText>Sub</placeholderText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <startBlockText>Function</startBlockText>  <endBlockText>End Function</endBlockText>  <placeholderText>Function</placeholderText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <startBlockText>Enum</startBlockText>  <endBlockText>End Enum</endBlockText>  <placeholderText>Enum</placeholderText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <startBlockText>Constructor</startBlockText>  <endBlockText>End Constructor</endBlockText>  <placeholderText>Constructor</placeholderText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <startBlockText>Destructor</startBlockText>  <endBlockText>End Destructor</endBlockText>  <placeholderText>Destructor</placeholderText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <startBlockText>Property</startBlockText>  <endBlockText>End Property</endBlockText>  <placeholderText>Property ... End Property</placeholderText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <startBlockText>Get</startBlockText>  <endBlockText>End Get</endBlockText>  <placeholderText>Get</placeholderText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <startBlockText>Set</startBlockText>  <endBlockText>End Set</endBlockText>  <placeholderText>Set</placeholderText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <startBlockText>For</startBlockText>  <endBlockText>End For</endBlockText>  <placeholderText>For ... End For</placeholderText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <startBlockText>If</startBlockText>  <endBlockText>End If</endBlockText>  <placeholderText>If ... End If</placeholderText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <startBlockText>Select</startBlockText>  <endBlockText>End Select</endBlockText>  <placeholderText>Select ... End Select</placeholderText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <startBlockText>While</startBlockText>  <endBlockText>End While</endBlockText>  <placeholderText>While ... End While</placeholderText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <startBlockText>Repeat</startBlockText>  <endBlockText>Until</endBlockText>  <placeholderText>Repeat ... Until</placeholderText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <startBlockText>Try</startBlockText>  <endBlockText>End Try</endBlockText>  <placeholderText>Try ... End Try</placeholderText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <startBlockText>With</startBlockText>  <endBlockText>End With</endBlockText>  <placeholderText>With ... End With</placeholderText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <startBlockText>Comimport From</startBlockText>  <endBlockText>End Comimport</endBlockText>  <placeholderText>Comimport From ... End Comimport</placeholderText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <startBlockText>Begin</startBlockText>  <endBlockText>End</endBlockText>  <placeholderText>Begin ... End</placeholderText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <startBlockText>Friend</startBlockText>  <endBlockText>End Sub</endBlockText>  <placeholderText>Friend Sub</placeholderText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <startBlockText>Protected Friend</startBlockText>  <endBlockText>End Sub</endBlockText>  <placeholderText>Protected Friend Sub</placeholderText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <startBlockText>Friend</startBlockText>  <endBlockText>End Function</endBlockText>  <placeholderText>Friend Function</placeholderText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <startBlockText>Protected Friend</startBlockText>  <endBlockText>End Function</endBlockText>  <placeholderText>Protected Friend Function</placeholderText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <startBlockText>Friend</startBlockText>  <endBlockText>End Property</endBlockText>  <placeholderText>Friend Property ... End Property</placeholderText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <startBlockText>Protected Friend</startBlockText>  <endBlockText>End Property</endBlockText>  <placeholderText>Protected Friend Property ... End Property</placeholderText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <startBlockText>/// <summary></startBlockText>  <endBlockText>/// </summary></endBlockText>  <placeholderText>/// ...</placeholderText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <startBlockText>/*</startBlockText>  <endBlockText>*/</endBlockText>  <placeholderText>/**/</placeholderText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <startBlockText>{</startBlockText>  <endBlockText>}</endBlockText>  <placeholderText>{}</placeholderText>  </Item>
  </items>
  </GetExpanderInfoResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
  "GetExpanderInfo": ""
}

### JSON-ответ:


{
  "GetExpanderInfoResult": {
    "items": {
      "Item": [
        {
          "startBlockText": "Interface",
          "endBlockText": "End Interface",
          "placeholderText": "Interface"
        },
        {
          "startBlockText": "Class",
          "endBlockText": "End Class",
          "placeholderText": "Class"
        },
        {
          "startBlockText": "Namespace",
          "endBlockText": "End Namespace",
          "placeholderText": "Namespace"
        },
        {
          "startBlockText": "Sub",
          "endBlockText": "End Sub",
          "placeholderText": "Sub"
        },
        {
          "startBlockText": "Function",
          "endBlockText": "End Function",
          "placeholderText": "Function"
        },
        {
          "startBlockText": "Enum",
          "endBlockText": "End Enum",
          "placeholderText": "Enum"
        },
        {
          "startBlockText": "Constructor",
          "endBlockText": "End Constructor",
          "placeholderText": "Constructor"
        },
        {
          "startBlockText": "Destructor",
          "endBlockText": "End Destructor",
          "placeholderText": "Destructor"
        },
        {
          "startBlockText": "Property",
          "endBlockText": "End Property",
          "placeholderText": "Property ... End Property"
        },
        {
          "startBlockText": "Get",
          "endBlockText": "End Get",
          "placeholderText": "Get"
        },
        {
          "startBlockText": "Set",
          "endBlockText": "End Set",
          "placeholderText": "Set"
        },
        {
          "startBlockText": "For",
          "endBlockText": "End For",
          "placeholderText": "For ... End For"
        },
        {
          "startBlockText": "If",
          "endBlockText": "End If",
          "placeholderText": "If ... End If"
        },
        {
          "startBlockText": "Select",
          "endBlockText": "End Select",
          "placeholderText": "Select ... End Select"
        },
        {
          "startBlockText": "While",
          "endBlockText": "End While",
          "placeholderText": "While ... End While"
        },
        {
          "startBlockText": "Repeat",
          "endBlockText": "Until",
          "placeholderText": "Repeat ... Until"
        },
        {
          "startBlockText": "Try",
          "endBlockText": "End Try",
          "placeholderText": "Try ... End Try"
        },
        {
          "startBlockText": "With",
          "endBlockText": "End With",
          "placeholderText": "With ... End With"
        },
        {
          "startBlockText": "Comimport From",
          "endBlockText": "End Comimport",
          "placeholderText": "Comimport From ... End Comimport"
        },
        {
          "startBlockText": "Begin",
          "endBlockText": "End",
          "placeholderText": "Begin ... End"
        },
        {
          "startBlockText": "Friend",
          "endBlockText": "End Sub",
          "placeholderText": "Friend Sub"
        },
        {
          "startBlockText": "Protected Friend",
          "endBlockText": "End Sub",
          "placeholderText": "Protected Friend Sub"
        },
        {
          "startBlockText": "Friend",
          "endBlockText": "End Function",
          "placeholderText": "Friend Function"
        },
        {
          "startBlockText": "Protected Friend",
          "endBlockText": "End Function",
          "placeholderText": "Protected Friend Function"
        },
        {
          "startBlockText": "Friend",
          "endBlockText": "End Property",
          "placeholderText": "Friend Property ... End Property"
        },
        {
          "startBlockText": "Protected Friend",
          "endBlockText": "End Property",
          "placeholderText": "Protected Friend Property ... End Property"
        },
        {
          "startBlockText": "/// &lt;summary&gt;",
          "endBlockText": "/// &lt;/summary&gt;",
          "placeholderText": "/// ..."
        },
        {
          "startBlockText": "/*",
          "endBlockText": "*/",
          "placeholderText": "/**/"
        },
        {
          "startBlockText": "{",
          "endBlockText": "}",
          "placeholderText": "{}"
        }
      ]
    }
  }
}


public static GetExpanderInfoResult GetExpanderInfo()
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetExpanderInfo();
    // Получение списка элементов кода, для которых доступно сворачивание/разворачивание
    var result = somClient. GetExpanderInfo(tGet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
