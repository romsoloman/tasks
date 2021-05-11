import Vue from 'vue'
import Vuex from 'vuex'
import { memberService } from "../services/member.service.js";
// import { utilService } from '../services/util.service.js';

Vue.use(Vuex)

export const memberStore = {
    state: {
        member: null,
        members: null,
        filter: null,
        isLoading: false

    },
    getters: {
        members(state) {
            return state.members
        },
        isLoading(state) {
            return state.isLoading;
        },
        member(state) {
            return state.member
        },
    },
    mutations: {
        setMembers(state, { members }) {
            state.members = members;
        },
        setIsLoading(state, { isLoading }) {
            state.isLoading = isLoading;
        },
        setMember(state, { member }) {
            state.member = member;
        },
        removeMember(state, { memberId }) {
            const idxToRemove = state.members.findIndex(member => {
                return member._id === memberId;
            })
            state.members.splice(idxToRemove, 1);
        },
        addMembers(state, { member }) {
            state.members.push(member);
        },
        updateMember(state, { member }) {
            const idxToUpdate = state.members.findIndex(memberFromArray => {
                return memberFromArray._id === member._id;
            })
            state.members.splice(idxToUpdate, 1, member);
        },
        setFilter(state, payload) {
            if (payload.filterBy) {
                const { filterBy } = payload;
                state.filter = filterBy;
            } else {
                const { filter } = payload;
                state.filter = filter;
            }
        },
    },
    actions: {
        loadMembers({ commit, state }) {
            commit({ type: 'setIsLoading', isLoading: true });
            memberService.query(state.filter || undefined)
                .then(members => {
                    commit({ type: 'setMembers', members });
                })
                .catch(err => {
                    console.log('Store: Cannot load members', err);
                    throw new Error('Cannot load members');
                })
                .finally(() => commit({ type: 'setIsLoading', isLoading: false }));
        },
        loadMember({ commit }, { userId }) {
            memberService.getByUserId(userId)
                .then(member => {
                    commit({ type: 'setMember', member });
                })
                .catch(err => {
                    console.log('Store: Cannot load members', err);
                    throw new Error('Cannot load members');
                })
        },
        saveMembers(context, { member }) {
            // member: support EDIT
            const type = (member._id) ? 'updateMember' : 'addMember';
            return memberService.save(member)
                .then(savedMember => {
                    console.log('savedMember-store', savedMember);
                    context.commit({ type, member: savedMember })
                })
                .catch(err => {
                    console.log('Store: Cannot save member', err);
                    throw new Error('Cannot save member');
                })
        },
        remove(context, { memberId }) {
            return memberService.remove(memberId)
                .then(() => {
                    console.log('afterRemove-store')
                    context.commit({ type: 'removeMember', memberId })
                })
                .catch(err => {
                    console.log('Store: Cannot remove member', err);
                    throw new Error('Cannot remove member');
                })
        },
    },
    modules: {
    }
}
