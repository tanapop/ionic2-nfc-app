/**
 * Account page
 * Created by Michael DESIGAUD on 10/02/2016.
 */
import {Page, IonicApp} from 'ionic-framework/index';
import {Inject} from 'angular2/core';
import {FromNowPipe} from '../../pipes/fromNowPipe';
import {User} from '../../classes/user';
import {TranslatePipe, TranslateService} from 'ng2-translate/ng2-translate';
import {Languages} from '../../utils/languages';
import * as moment from 'moment';
import {StorageUtils} from '../../utils/storage.utils';

@Page({
    templateUrl: 'build/pages/account/account.html',
    pipes: [FromNowPipe,TranslatePipe]
})
export class AccountPage {
    account:User;
    translate:TranslateService;
    app:IonicApp;
    languages:Languages;
    constructor(@Inject(TranslateService) translate: TranslateService, @Inject(IonicApp) app: IonicApp) {
        this.app = app;
        this.translate = translate;
        this.account = new User(StorageUtils.getToken());
        this.languages = Languages.get();
    }
    changeLocale():void {
        console.log('change locale',this.app.lang);
        this.translate.use(this.app.lang);
        moment.locale(this.app.lang);
    }
}
