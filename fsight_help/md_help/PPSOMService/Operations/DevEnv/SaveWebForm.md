# SaveWebForm: Операция

SaveWebForm: Операция
-


**


# SaveWebForm


## Синтаксис


bool SaveWebForm(WebFormId tWebForm, SaveWebFormArg
 tArg)


## Параметры


tWebForm. Моникёр
 открытого экземпляра веб-формы.


tArg. Параметры выполнения
 операции.


## Описание


Операция SaveWebForm сохраняет
 изменения веб-формы.


## Комментарии


Для выполнения операции укажите в поле tWebForm
 моникёр открытого экземпляра веб-формы, а в поле tArg.meta
 обновлённые метаданные, которые необходимо сохранить. Моникёр можно получить
 с помощью операции [OpenWebForm](OpenWebForm.htm).


Результатом операции будет логическое значение true,
 если сохранение изменений веб-формы завершилось успешно.


## Пример


Ниже приведён пример сохранения изменений веб-формы. В запросе передаётся
 моникёр открытого экземпляра веб-формы и обновлённый код формы. В ответе
 возвращается признак успешного сохранения изменений.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SaveWebForm xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tWebForm xmlns="****">
  <id>OLFDALNNBBFEGOAEGJFAPCEOMHPCOHIEIKADOOOFNHINOGAL!M!S!WFCLOMMLNNBBFEGOAEMLACIMNEFMDKNONEJKFAOPKOCKGPLBAH</id>  </tWebForm>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<meta>
  <text>Class OBJ402445WebForm: WebForm	Button1: WebButton;	Input2: WebInput;	Label2: WebLabel;	Input1: WebInput;	Label1: WebLabel;	End Class OBJ402445WebForm;//...//Комментарии к коду формы//...</text>  </meta>
  </tArg>
  </SaveWebForm>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SaveWebFormResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SaveWebFormResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SaveWebForm" :
  {
   "tWebForm" :
    {
     "id" : "OLFDALNNBBFEGOAEGJFAPCEOMHPCOHIEIKADOOOFNHINOGAL!M!S!WFCLOMMLNNBBFEGOAEMLACIMNEFMDKNONEJKFAOPKOCKGPLBAH"
    },
   "tArg" :
    {
     "meta" :
      {
       "text" : "Class OBJ402445WebForm: WebForm\tButton1: WebButton;\tInput2: WebInput;\tLabel2: WebLabel;\tInput1: WebInput;\tLabel1: WebLabel;\tEnd Class OBJ402445WebForm;\/\/...\/\/Комментарии к коду формы\/\/..."
      }
    }
  }
}

### JSON-ответ:


{
 "SaveWebFormResult" : "1"
}


public static bool SaveWebForm(string moniker, string newText = "")
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    var tSave = new SaveWebForm()
    {
        tArg = new SaveWebFormArg()
        {
            meta = new SetWebFormMD()
            {
                text = newText
            }
        },
        tWebForm = new WebFormId() { id = moniker }
    };
    // Сохранение изменений веб-формы
    var result = somClient.SaveWebForm(tSave);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
